// -------------------------------------------------------------
// GitHub Repository Configuration
// -------------------------------------------------------------
const REPO_OWNER = 'codinggita';
const REPO_NAME = 'CGxSU_Semester_1';
const BRANCH = 'main';
const API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees/${BRANCH}?recursive=1`;
const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}`;

// Cache Configuration - Version 4 to force fresh fetch
const CACHE_KEY = 'dashboard_tree_v5';
const CACHE_dURATION = 60 * 60 * 1000; // 1 hour

// -------------------------------------------------------------
// Data Mappings
// -------------------------------------------------------------

// Maps Repository Folder Name -> Internal Subject Key
const SUBJECT_FOLDERS = {
    'html_css_js(sem_01)': 'html',
    'c_language(sem_01)': 'c_language',
    'javascript_for_backend(sem_01)': 'js_backend',
    'git_&_github(sem_01)': 'git',
    'maths(sem_01)': 'maths'
};

// Maps Subject Key -> UI Display Name & Icon
const UI_CONFIG = {
    'html': { name: 'HTML/CSS/JS', icon: '🎨' },
    'c_language': { name: 'C Language', icon: '💻' },
    'js_backend': { name: 'JS Backend', icon: '⚙️' },
    'git': { name: 'Git & Github', icon: '🐙' },
    'maths': { name: 'Maths', icon: '📐' }
};

// -------------------------------------------------------------
// State Management
// -------------------------------------------------------------
let fileTree = [];
let activeSubjectKey = null;
let currentMarkdownContent = "";

// Quiz State
let quizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;

// DOM Elements
const topicSidebar = document.getElementById('topic-sidebar');
const topicContainer = document.getElementById('topic-container');
const markdownViewer = document.getElementById('markdown-viewer');
const currentSubjectTitle = document.getElementById('current-subject');
const currentTopicTitle = document.getElementById('current-topic');

// -------------------------------------------------------------
// Initialization
// -------------------------------------------------------------
async function init() {
    setupMarkdownConfig();
    setupSidebarUI();
    await loadRepositoryData();
}

function setupMarkdownConfig() {
    if (typeof marked !== 'undefined') {
        marked.use({
            highlight: function(code, lang) {
                if (typeof highlight !== 'undefined') {
                    const language = highlight.getLanguage(lang) ? lang : 'plaintext';
                    return highlight.highlight(code, { language }).value;
                }
                return code;
            },
            langPrefix: 'hljs language-'
        });
    }
}

// -------------------------------------------------------------
// Data Fetching
// -------------------------------------------------------------
// Minimal Fallback Data (In case of API Rate Limit)
const FALLBACK_TREE = [
    { path: "html_css_js(sem_01)/HTML/00.syllabus.md", type: "blob" },
    { path: "html_css_js(sem_01)/CSS/01.selectors.md", type: "blob" },
    { path: "html_css_js(sem_01)/CSS/assignment1-selectors.html", type: "blob" },
    { path: "html_css_js(sem_01)/CSS/assignment1-selectors.css", type: "blob" },
    { path: "html_css_js(sem_01)/JS/01.intro.md", type: "blob" },
    { path: "c_language(sem_01)/01.basics.md", type: "blob" }
];

// -------------------------------------------------------------
// Data Fetching
// -------------------------------------------------------------
async function loadRepositoryData() {
    // Check for cached tree first
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const { timestamp, data } = JSON.parse(cached);
        // Cache valid for 1 hour
        if (Date.now() - timestamp < CACHE_dURATION) {
            console.log('Loaded from cache');
            fileTree = data;
            renderSubjects();
            if (currentTopicTitle) currentTopicTitle.innerHTML = 'Synced (Cache)';
            return;
        }
    }

    try {
        if (currentTopicTitle) currentTopicTitle.textContent = 'Syncing...';
        
        const response = await fetch(API_URL);
        
        if (response.status === 403) {
            throw new Error('GitHub API Rate Limit Exceeded. Try again in 1 hour.');
        }
        if (!response.ok) throw new Error('Network Error: ' + response.status);
        
        const json = await response.json();
        
        // Filter: Allow Markdown, HTML, CSS, JS files
        fileTree = json.tree.filter(item => 
            /\.(md|html|css|js)$/i.test(item.path) && 
            Object.keys(SUBJECT_FOLDERS).some(folder => item.path.startsWith(folder))
        );
        
        // Save to cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            timestamp: Date.now(),
            data: fileTree
        }));

        renderSubjects();
        if (currentTopicTitle) {
            currentTopicTitle.textContent = 'Synced with GitHub';
            setTimeout(() => currentTopicTitle.textContent = 'Overview', 1000);
        }

    } catch (error) {
        console.error("Fetch Error:", error);
        // Fallback
        if (cached) {
            fileTree = JSON.parse(cached).data;
        } else if (markdownViewer) {
            markdownViewer.innerHTML = `<div class="error-state"><h3>⚠️ Offline</h3><p>Could not reach GitHub.</p></div>`;
        }
    }
}

// -------------------------------------------------------------
// Interaction Logic
// -------------------------------------------------------------
function setupSidebarUI() {
    // Navigation Items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            const key = item.getAttribute('data-subject');
            if (key === 'intro') {
                switchMainMode('study');
                showDashboard();
            } else if (key === 'question_bank') {
                switchMainMode('question-bank');
            } else {
                switchMainMode('study'); // Ensure we are in study mode for subjects
                renderSubjectTopics(key);
            }
        });
    });

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            
            const content = document.getElementById(`tab-${e.target.dataset.tab}`);
            if (content) content.classList.add('active');
        });
    });

    // Search
    const search = document.getElementById('topic-search');
    if (search) {
        search.addEventListener('input', (e) => filterTopics(e.target.value.toLowerCase()));
    }
}

function filterTopics(query) {
    document.querySelectorAll('.topic-item').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
}

function showDashboard() {
    activeSubjectKey = null;
    if (topicSidebar) topicSidebar.classList.add('hidden');
    if (currentSubjectTitle) currentSubjectTitle.textContent = 'Dashboard';
    
    if (markdownViewer) {
        markdownViewer.innerHTML = `
            <div class="welcome-screen">
                <h2>Welcome Back</h2>
                <p>Select a subject from the sidebar.</p>
                <div class="stats-grid">
                    <div class="stat-card"><h3>${fileTree.length}</h3><p>Notes Available</p></div>
                </div>
            </div>
        `;
    }
}

// -------------------------------------------------------------
// Core Feature: Render Topics with Merged Grouping
// -------------------------------------------------------------
function renderSubjectTopics(subjectKey) {
    activeSubjectKey = subjectKey;
    const config = UI_CONFIG[subjectKey];
    currentSubjectTitle.innerHTML = `${config.icon} ${config.name}`;
    
    // Determine Target Folders for this Subject
    let targetFolders = [];
    if (subjectKey === 'html') {
        targetFolders = ['html_css_js(sem_01)']; 
        // Note: JS Backend was requested to be merged or separate? 
        // Repo structure suggests 'javascript_for_backend(sem_01)' is a peer folder.
        // If user wants them strictly same as repo, we might need to include it or not.
        // "Subject: HTML/CSS/JS" usually implies the frontend stuff in 'html_css_js(sem_01)'
    } else {
        const prefix = Object.keys(SUBJECT_FOLDERS).find(k => SUBJECT_FOLDERS[k] === subjectKey);
        if (prefix) targetFolders = [prefix];
    }

    // Filter files for this subject
    const validFiles = fileTree.filter(file => 
        targetFolders.some(folder => file.path.startsWith(folder))
    );

    topicContainer.innerHTML = '';

    if (validFiles.length === 0) {
        topicContainer.innerHTML = '<li class="loading">No contents found. <br><small>Check connection or rate limit.</small></li>';
        return;
    }

    // GENERIC REPO MIRROR GROUPS
    const grouped = {};

    validFiles.forEach(file => {
        // Find which root folder this file belongs to
        const rootFolder = targetFolders.find(f => file.path.startsWith(f));
        if (!rootFolder) return;

        // Get relative path: "html_css_js(sem_01)/CSS/01.selectors.md" -> "CSS/01.selectors.md"
        const relativePath = file.path.slice(rootFolder.length + 1); // +1 for slash
        
        const parts = relativePath.split('/');
        
        let groupName = "General";
        let fileName = relativePath;

        if (parts.length > 1) {
            // It has a subfolder: "CSS" is the group
            groupName = parts[0]; 
        } else {
            // It's in the root of the subject folder
            groupName = "Root";
        }
        
        // User Request: "I don't want path in name only name in name"
        // Example: HTML/basics/intro.html -> Group: HTML, Name: intro.html (was basics/intro.html)
        fileName = parts[parts.length - 1];

        // Clean up Group Name (remove numbers if repo uses "01. CSS")
        groupName = groupName.replace(/[-_]/g, ' '); 

        if (!grouped[groupName]) grouped[groupName] = [];
        
        // Clean Display Name
        let displayName = fileName;
        // User said "same as github", GitHub shows extensions.
        // Let's hide .md for neatness, show others.
        if (displayName.endsWith('.md')) displayName = displayName.slice(0, -3);
        
        grouped[groupName].push({
            path: file.path,
            name: displayName,
            // Store raw filename for sorting
            rawName: fileName
        });
    });

    // RENDER S.SORTED
    const sortedGroups = Object.keys(grouped).sort((a, b) => {
        // "Root" or "General" usually goes first or last? GitHub puts folders first, then files.
        // Our structure puts files in "Root" group.
        if (a === 'Root') return -1;
        if (b === 'Root') return 1;
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    sortedGroups.forEach(group => {
        const header = document.createElement('li');
        header.className = 'topic-group-header';
        header.textContent = group === 'Root' ? 'Overview' : group; // UI Polish
        header.style.cssText = 'padding: 12px 0 6px 10px; font-weight:800; color: var(--primary); font-size: 0.75em; text-transform:uppercase; letter-spacing: 1px; cursor: pointer;';
        
        const subList = document.createElement('ul');
        subList.className = 'topic-sublist visible'; // Default Open
        
        // Accordion Toggle
        header.onclick = () => {
           subList.classList.toggle('visible');
           header.classList.toggle('active');
        };

        // Sort Files Alphanumerically (Repo Order)
        grouped[group].sort((a, b) => a.rawName.localeCompare(b.rawName, undefined, { numeric: true, sensitivity: 'base' }));

        grouped[group].forEach(item => {
            const li = document.createElement('li');
            li.className = 'topic-item';
            
            // Icon based on type
            let icon = '📄';
            if (item.path.endsWith('.html')) icon = '🌐';
            else if (item.path.endsWith('.css')) icon = '🎨';
            else if (item.path.endsWith('.js')) icon = '⚡';
            
            li.innerHTML = `<span style="margin-right:8px; opacity:0.7">${icon}</span>${item.name}`;
            
            li.onclick = (e) => {
                // Remove active class from all
                document.querySelectorAll('.topic-item').forEach(x => x.classList.remove('active'));
                li.classList.add('active');
                e.stopPropagation();
                loadContent(item.path);
            };
            subList.appendChild(li);
        });

        topicContainer.appendChild(header);
        topicContainer.appendChild(subList);
    });

    if (topicSidebar) topicSidebar.classList.remove('hidden');
    
    // Reset Search
    const sBox = document.getElementById('topic-search');
    if (sBox) { sBox.value = ''; sBox.parentElement.style.display = 'block'; }
    
    updateCompiler(subjectKey);
}

// -------------------------------------------------------------
// Preloaded Content (Fallback/Override for reliability)
// -------------------------------------------------------------
const PRELOADED_CONTENT = {
    'html_css_js(sem_01)/CSS/01.selectors.md': `
# CSS Selectors

CSS selectors are used to target specific HTML elements for styling. Below are the most common types of selectors: **Element**, **ID**, **Class**, **Grouping**, and **Universal**, each with multiple examples to illustrate their usage.

### 1. Element Selector
The element selector targets all instances of a specific HTML element type, such as \`<p>\`, \`<h1>\`, or \`<div>\`.

**Example 1**:
\`\`\`css
h2 {
  color: teal;
  font-weight: bold;
}
\`\`\`
Styles all \`<h2>\` elements with teal text color and bold font weight.

**Example 2**:
\`\`\`css
div {
  border: 1px solid black;
  padding: 10px;
}
\`\`\`
Adds a black border and 10 pixels of padding to all \`<div>\` elements.

**Example 3**:
\`\`\`css
a {
  text-decoration: none;
  color: orange;
}
\`\`\`
Removes the underline and sets the color to orange for all \`<a>\` elements.

**Example 4**:
\`\`\`css
ul {
  list-style-type: square;
  margin-left: 20px;
}
\`\`\`
Styles all \`<ul>\` elements with square bullets and a left margin of 20 pixels.

### 2. ID Selector
The ID selector targets a single HTML element with a specific \`id\` attribute. It uses the \`#\` symbol.

**Example 1**:
\`\`\`css
#banner {
  background-color: yellow;
  text-align: center;
}
\`\`\`

**Example 2**:
\`\`\`css
#footer {
  font-size: 14px;
  color: gray;
}
\`\`\`

### 3. Class Selector
The class selector targets all elements with a specific \`class\` attribute. It uses a period \`.\`.

**Example 1**:
\`\`\`css
.alert {
  background-color: red;
  color: white;
  padding: 10px;
}
\`\`\`

**Example 2**:
\`\`\`css
.card {
  border: 2px solid blue;
  border-radius: 5px;
}
\`\`\`

### 4. Grouping Selector
Apply the same styles to multiple selectors by separating them with commas.

**Example 1**:
\`\`\`css
h1, h3, .header {
  font-family: Helvetica;
  color: darkblue;
}
\`\`\`

### 5. Universal Selector
The universal selector (\`*\`) targets all elements on a page.

**Example 1**:
\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
\`\`\`
`,
    'html_css_js(sem_01)/CSS/assignment1-selectors.html': `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Assignment 1 — CSS Selectors</title>
  <style>
    /* Default Basic Styles for preview */
    body { font-family: 'Roboto', sans-serif; padding: 20px; line-height: 1.6; }
    section { margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
  </style>
</head>
<body>
  <header id="site-title">
    <h1 id="brand">CodingGita — CSS Selectors Lab</h1>
    <h2 class="subtitle">Assignment 1: Practice with different selectors</h2>
  </header>

  <nav>
    <ul>
      <li><a href="#" class="nav-link">Home</a></li>
      <li><a href="#" class="nav-link active">Selectors</a></li>
      <li><a href="#" class="nav-link">Resources</a></li>
      <li><a href="#" class="nav-link">Contact</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>Overview</h2>
      <p class="lead">This page is made to practice different CSS selectors.</p>
      <p class="muted">This text should look gray or lighter.</p>
    </section>

    <section>
      <h3>Class Selector</h3>
      <p class="highlight">This paragraph is highlighted using a class.</p>
    </section>

    <section>
      <h3>Specificity Example</h3>
      <p class="highlight-text">This paragraph uses the highlight-text class.</p>
      <p id="override" class="highlight-text">This one uses the same class, but also an ID — ID should win.</p>
    </section>

    <section>
      <h3>Descendant & Child Selector</h3>
      <div class="outer">
        <h4>Section heading (style me using child selector)</h4>
        <p>Paragraph inside a section.</p>
      </div>
    </section>

    <section>
      <h3>Adjacent Sibling Selector</h3>
      <h4>Heading before paragraph</h4>
      <p>This paragraph should look different since it comes right after h4.</p>
    </section>

    <section>
      <h3>Attribute Selector</h3>
      <p>[Images Placeholder]</p>
    </section>

    <section>
      <h3>nth-child Selector</h3>
      <ul class="striped-list">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
      </ul>
    </section>
  </main>
  <footer>
    <small>Assignment 1 — Students must complete all CSS instructions inside <strong>assignment1-selectors.css</strong></small>
  </footer>
</body>
</html>
`
};

// -------------------------------------------------------------
// Content Loading
// -------------------------------------------------------------
async function loadContent(path) {
    const markdownViewer = document.getElementById('markdown-viewer');
    const noteArea = document.getElementById('note-area');
    
    if (!markdownViewer) return;
    
    // UI Updates
    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    
    markdownViewer.innerHTML = '<div class="loading-spinner"></div>';
    if(noteArea) noteArea.value = ''; 
    
    // Set Header
    const filename = path.split('/').pop().replace(/\.(md|html)$/i, '').replace(/[-_]/g, ' ');
    if (currentTopicTitle) currentTopicTitle.textContent = filename;

    try {
        currentMarkdownContent = "";
        
        // Try fetching first
        try {
            const res = await fetch(`${RAW_BASE_URL}/${path}`);
            if (!res.ok) throw new Error('Fetch failed');
            currentMarkdownContent = await res.text();
        } catch (fetchError) {
            console.warn("GitHub Fetch failed, checking preload...", fetchError);
            if (PRELOADED_CONTENT[path]) {
                currentMarkdownContent = PRELOADED_CONTENT[path];
                if (currentTopicTitle) currentTopicTitle.textContent += " (Offline)";
            } else {
                throw new Error("Could not reach GitHub and no offline copy available.");
            }
        }

        
        // Handle File Types
        if (path.endsWith('.html')) {
            // Inject Helper: Fetch linked CSS and embed it
            // This fixes "no difference in css" by applying the external styles to the iframe
            const parser = new DOMParser();
            const doc = parser.parseFromString(currentMarkdownContent, 'text/html');
            
            const links = doc.querySelectorAll('link[rel="stylesheet"]');
            for (const link of links) {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http')) { // Relative link
                    try {
                        const cssPath = path.substring(0, path.lastIndexOf('/') + 1) + href;
                        const cssRes = await fetch(`${RAW_BASE_URL}/${cssPath}`);
                        if (cssRes.ok) {
                            const cssText = await cssRes.text();
                            const style = doc.createElement('style');
                            style.textContent = cssText;
                            link.replaceWith(style);
                        }
                    } catch (e) {
                         console.warn("Failed to inject CSS:", href);
                    }
                }
            }

            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '800px';
            iframe.style.border = 'none';
            iframe.style.background = 'white';
            iframe.srcdoc = doc.documentElement.outerHTML;
            
            markdownViewer.innerHTML = '';
            markdownViewer.appendChild(iframe);
        } else {
            markdownViewer.innerHTML = marked.parse(currentMarkdownContent);
            if (typeof hljs !== 'undefined') hljs.highlightAll();
        }
        
        // Content loaded successfully
    } catch (e) {
        markdownViewer.innerHTML = `<p class="error-msg">Failed to load content: ${e.message}</p>`;
    }
}

// -------------------------------------------------------------
// Test Center Logic
// -------------------------------------------------------------

function switchMainMode(mode) {
    // Buttons
    document.getElementById('mode-study').classList.toggle('active', mode === 'study');
    document.getElementById('mode-test-center').classList.toggle('active', mode === 'test-center');
    
    // Views
    document.getElementById('study-view').classList.toggle('active', mode === 'study');
    
    const testView = document.getElementById('test-center-view');
    const qbView = document.getElementById('question-bank-view');
    
    if (testView) {
        testView.classList.toggle('active', mode === 'test-center');
        testView.classList.toggle('hidden', mode !== 'test-center');
    }
    if (qbView) {
        qbView.classList.toggle('active', mode === 'question-bank');
        qbView.classList.toggle('hidden', mode !== 'question-bank');
    }
    
    // Sidebar Visibility & Breadcrumbs
    const sidebar = document.getElementById('topic-sidebar');
    if (sidebar) {
        if (mode === 'test-center') {
            sidebar.classList.add('hidden');
            // Update Breadcrumbs for Test Mode
            document.getElementById('current-subject').innerText = "Test Center";
            document.getElementById('current-topic').innerText = "Selection";
        } else if (mode === 'study' && activeSubjectKey) {
            sidebar.classList.remove('hidden');
            // Breadcrumbs will be updated by renderSubjectTopics/File
            // But we can reset if needed just in case
        }
    }

    if (mode === 'test-center') {
        TestManager.init();
    } else if (mode === 'question-bank') {
        QuestionBankManager.init();
    }
}

// Old QuestionBankManager removed - using new implementation below

const TestManager = {
    state: {
        currentSubject: null,
        currentSubjectData: null, // Store full JSON
        currentUnit: null,
        testType: null, // 'mcq', 'theory', 'coding'
        questions: [],
        currentIndex: 0,
        answers: {}, // { qId: answer }
        timer: null,
        timeLeft: 0
    },

    // 1. Initialize & Show Subjects
    init() {
        this.showSubjects();
    },

    showSubjects() {
        this.resetView();
        document.getElementById('test-subjects').classList.add('active');
        document.getElementById('test-subjects').classList.remove('hidden');
        
        const grid = document.getElementById('subject-grid');
        grid.innerHTML = Object.entries(UI_CONFIG).map(([key, config]) => `
            <div class="subject-card" onclick="TestManager.showUnits('${key}')">
                <span class="icon">${config.icon}</span>
                <h3>${config.name}</h3>
            </div>
        `).join('');
    },

    // 2. Show Units
    async showUnits(subjectKey) {
        this.state.currentSubject = UI_CONFIG[subjectKey];
        this.resetView();
        document.getElementById('test-units').classList.remove('hidden');
        document.getElementById('selected-subject-title').innerText = this.state.currentSubject.name;
        document.getElementById('unit-list').innerHTML = '<div class="loading">Loading Test Bank...</div>';

        // PATH MAPPING
        let dataPath = null;
        if (subjectKey === 'c_language') dataPath = 'test_data/c_language.json';
        else if (subjectKey === 'maths') dataPath = 'test_data/maths.json';
        else if (subjectKey === 'html') dataPath = 'test_data/html_css_js.json';
        else if (subjectKey === 'js_backend') dataPath = 'test_data/js_backend.json';
        else if (subjectKey === 'git') dataPath = 'test_data/git_github.json'; 

        let units = [];

        if (dataPath) {
            try {
                // Fetch Data if not already loaded or different subject
                // Ideally cache this, but for now fetch fresh to ensure updates
                const res = await fetch(dataPath);
                if (!res.ok) throw new Error('File not found');
                const json = await res.json();
                this.state.currentSubjectData = json;
                units = json.units;
            } catch (e) {
                console.warn("Failed to load real data:", e);
                units = this.getMockUnits();
                this.state.currentSubjectData = null;
            }
        } else {
            units = this.getMockUnits();
            this.state.currentSubjectData = null;
        }

        const list = document.getElementById('unit-list');
        if (units.length === 0) {
            list.innerHTML = '<p>No test units available for this subject yet.</p>';
            return;
        }

        list.innerHTML = units.map((u, index) => `
            <div class="unit-card">
                <h4>${u.unit_name || u.name}</h4>
                <div class="test-actions">
                    <button class="start-test-btn btn-mcq" onclick="TestManager.startTest(${index}, 'mcq')">MCQ</button>
                    <button class="start-test-btn btn-theory" onclick="TestManager.startTest(${index}, 'theory')">Theory</button>
                    ${subjectKey !== 'maths' ? `<button class="start-test-btn btn-coding" onclick="TestManager.startTest(${index}, 'coding')">${subjectKey === 'git' ? 'Practical' : 'Coding'}</button>` : ''}
                </div>
            </div>
        `).join('');
    },

    getMockUnits() {
        return [
            { id: 101, name: "Basics & Syntax (Mock)" },
            { id: 102, name: "Control Structures (Mock)" }
        ];
    },

    // 3. Start Test (Unit Index is passed now)
    startTest(unitIndex, type) {
        this.resetView();
        document.getElementById('test-runner').classList.remove('hidden');
        
        this.state.currentUnit = unitIndex; // Index in the units array
        this.state.testType = type;
        this.state.currentIndex = 0;
        this.state.answers = {};
        this.state.timeLeft = 20 * 60; // 20 mins

        // Load Questions from State
        if (this.state.currentSubjectData && this.state.currentSubjectData.units[unitIndex]) {
            const unit = this.state.currentSubjectData.units[unitIndex];
            if (type === 'mcq') this.state.questions = unit.mcqs || [];
            else if (type === 'theory') this.state.questions = unit.theory_questions || [];
            else if (type === 'coding') this.state.questions = (unit.coding_questions || unit.practical_questions || []);
        } else {
             this.state.questions = this.getMockQuestions(type);
        }

        if (this.state.questions.length === 0) {
            alert("No questions found for this section.");
            this.showUnits(Object.keys(UI_CONFIG).find(k => UI_CONFIG[k] === this.state.currentSubject));
            return;
        }

        this.renderQuestion();
        this.startTimer();
    },

    getMockQuestions(type) {
        // Fallback Mock Data
        if (type === 'mcq') return Array.from({length:5}, (_,i) => ({
            id: i+1, question: `Sample MCQ Question ${i+1}?`, 
            option_a: "Option A", option_b: "Option B", option_c: "Option C", option_d: "Option D", 
            correct_option: "A"
        }));
        if (type === 'theory') return [{id:1, question: "Explain the concept in detail.", marks: 5}];
        if (type === 'coding') return [{id:1, problem_statement: "Write a function to solve X."}];
        return [];
    },

    // 4. Render Interface
    renderQuestion() {
        const q = this.state.questions[this.state.currentIndex];
        const total = this.state.questions.length;
        const type = this.state.testType;
        const container = document.getElementById('question-area');
        
        // Progress
        document.getElementById('progress-text').innerText = `Question ${this.state.currentIndex + 1}/${total}`;
        document.getElementById('test-progress').style.width = `${((this.state.currentIndex+1)/total)*100}%`;

        // Buttons
        document.getElementById('prev-btn').disabled = this.state.currentIndex === 0;
        document.getElementById('next-btn').classList.toggle('hidden', this.state.currentIndex === total - 1);
        document.getElementById('submit-btn').classList.toggle('hidden', this.state.currentIndex !== total - 1);

        // Content
        let html = `<h3>Q${this.state.currentIndex+1}. ${q.question || q.problem_statement || q.scenario || 'Question'}</h3>`;
        if (q.task) html += `<p style='margin-top:-0.5rem; color:#888;'>${q.task}</p>`;
        
        if (type === 'mcq') {
            const opts = ['a','b','c','d']; // Lowercase keys in my specific JSON generator? 
            // My generator produced "options": ["A", "B"...] array, not keys!
            // Let's handle ARRAY options vs KEY options.
            
            html += `<div class="mcq-options">`;
            
            if (Array.isArray(q.options)) {
                // Array Format: ["Desc A", "Desc B", ...]
                q.options.forEach((text, i) => {
                    const label = String.fromCharCode(65 + i); // A, B, C, D
                    const isSelected = this.state.answers[q.id] === label; // Correct Option is 'A'/'B' etc commonly
                    // Update: My JSON has Correct Option "C".
                    
                    html += `
                        <div class="mcq-option ${isSelected ? 'selected' : ''}" 
                             onclick="TestManager.saveAnswer(${q.id}, '${label}')">
                             <span style="font-weight:bold; margin-right:8px">${label})</span> ${text}
                        </div>
                    `;
                });
            } else {
               // Object Format: option_a, option_b
               ['a','b','c','d'].forEach(opt => {
                    const text = q[`option_${opt}`];
                    if (!text) return;
                    const isSelected = this.state.answers[q.id] === opt.toUpperCase();
                    html += `
                        <div class="mcq-option ${isSelected ? 'selected' : ''}" 
                             onclick="TestManager.saveAnswer(${q.id}, '${opt.toUpperCase()}')">
                             <span style="font-weight:bold; margin-right:8px">${opt.toUpperCase()})</span> ${text}
                        </div>
                    `;
               });
            }
            
            html += `</div>`;
        } else if (type === 'theory') {
            const val = this.state.answers[q.id] || '';
            html += `<textarea class="code-editor" style="height:200px" placeholder="Type answer..." oninput="TestManager.saveAnswer(${q.id}, this.value)">${val}</textarea>`;
            // Show Model Answer Toggle if reviewing?
        } else if (type === 'coding') {
            const val = this.state.answers[q.id] || q.code_c || '';
            const isPractical = !!q.scenario;
            html += `
                <div class="coding-layout">
                    <div class="problem-pane">
                        ${isPractical ? `
                            <p><strong>Scenario:</strong> ${q.scenario}</p>
                            <p><strong>Expected:</strong> Command based solution</p>
                        ` : `
                            <p><strong>Input:</strong> ${q.input_format}</p>
                            <p><strong>Output:</strong> ${q.output_format}</p>
                        `}
                    </div>
                    <div class="compiler-pane" style="background:#1e1e1e; color:#fff; border-radius: 8px; padding: 10px;">
                        <textarea class="code-editor" style="height:100%; width:100%; border:none; background:transparent; color:#0f0; font-family:monospace;" 
                                  placeholder="${isPractical ? 'Enter git commands here...' : 'Write code here...'}"
                                  oninput="TestManager.saveAnswer(${q.id}, this.value)">${val}</textarea>
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;
    },

    saveAnswer(qId, value) {
        this.state.answers[qId] = value;
        if (this.state.testType === 'mcq') this.renderQuestion(); // Re-render for selection highlight
    },

    nextQuestion() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.renderQuestion();
        }
    },

    prevQuestion() {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.renderQuestion();
        }
    },

    // 5. Submit & Score
    quitTest() {
        if(confirm("Exit test? Progress will be lost.")) this.showSubjects();
    },

    submitTest() {
        clearInterval(this.state.timer);
        const container = document.getElementById('question-area');
        
        let score = 0;
        let total = this.state.questions.length;
        
        if (this.state.testType === 'mcq') {
            this.state.questions.forEach(q => {
                // Handle different option formats if needed, but usually 'A', 'B', 'C'
                if (this.state.answers[q.id] === q.correct_option) score++;
            });
            const percent = Math.round((score/total)*100);
            
            container.innerHTML = `
                <div class="quiz-result">
                    <div class="score-circle">${score}/${total}</div>
                    <h3>Test Completed!</h3>
                    <p class="quiz-progress">Accuracy: ${percent}%</p>
                    <button class="nav-btn primary" onclick="TestManager.showSubjects()">Back to Subjects</button>
                    <!-- Review Answers could go here -->
                </div>
            `;
            document.querySelector('.controls').classList.add('hidden');
        } else {
             container.innerHTML = `
                <div class="quiz-result">
                    <div class="score-circle">Done</div>
                    <h3>Submitted for Review</h3>
                    <p>Theory/Coding tests require manual or backend evaluation.</p>
                    <button class="nav-btn primary" onclick="TestManager.showSubjects()">Back to Subjects</button>
                </div>
            `;
            document.querySelector('.controls').classList.add('hidden');
        }
    },

    // Utils
    resetView() {
        document.querySelectorAll('.test-view-section').forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.test-view-section').forEach(el => el.classList.remove('active'));
        document.querySelector('.controls').classList.remove('hidden');
        clearInterval(this.state.timer);
    }
};

// -------------------------------------------------------------
// Question Bank Manager
// -------------------------------------------------------------
const QuestionBankManager = {
    state: {
        subjects: [],
        units: [],
        activeSubject: null,
        activeUnit: null,
        testBanks: {}
    },

    /**
     * Initializer called when switching to Question Bank mode
     */
    init() {
        this.showSubjects();
    },

    /**
     * Register a test bank for a subject
     */
    registerTestBank(subjectId, data) {
        if (!this.state.testBanks) this.state.testBanks = {};
        this.state.testBanks[subjectId] = data;
        console.log("✅ Registered test bank:", subjectId);
    },

    /**
     * Show the subject selection grid
     */
    showSubjects() {
        const subjectsDiv = document.getElementById('qb-subjects');
        const contentDiv = document.getElementById('qb-content');
        if (subjectsDiv) subjectsDiv.classList.remove('hidden');
        if (contentDiv) contentDiv.classList.add('hidden');
        this.renderSubjects();
    },

    /**
     * Render the subject grid
     */
    renderSubjects() {
        const container = document.getElementById('qb-subjects');
        if (!container) return;

        const subjects = [
            { id: 'html_css_js', name: 'HTML/CSS/JS', icon: '🎨' },
            { id: 'c_language', name: 'C Language', icon: '💻' },
            { id: 'maths', name: 'Maths', icon: '📐' },
            { id: 'js_backend', name: 'JS Backend', icon: '⚙️' },
            { id: 'git_github', name: 'Git & Github', icon: '🐙' }
        ];

        container.innerHTML = subjects.map(sub => `
            <div class="subject-card" onclick="QuestionBankManager.loadSubject('${sub.id}')">
                <div class="icon">${sub.icon}</div>
                <h3>${sub.name}</h3>
                <p>View Question Bank</p>
            </div>
        `).join('');
    },

    /**
     * Hardened loadSubject() as per requirements
     */
    loadSubject(subjectId) {
        console.log("📚 Requested subject:", subjectId);
        console.log("📦 Available banks:", Object.keys(this.state.testBanks));

        const bank = this.state.testBanks[subjectId];
        if (!bank) {
            alert("❌ No test bank found for " + subjectId);
            return;
        }

        this.state.activeSubject = subjectId;
        this.state.units = bank.units || [];
        
        // UI Transition
        const subjectsDiv = document.getElementById('qb-subjects');
        const contentDiv = document.getElementById('qb-content');
        if (subjectsDiv) subjectsDiv.classList.add('hidden');
        if (contentDiv) contentDiv.classList.remove('hidden');
        
        const header = document.getElementById('qb-unit-title');
        if (header) header.innerText = bank.subject_name || "Question Bank";

        this.renderUnits();
    },

    /**
     * Render units for the selected subject
     */
    renderUnits() {
        const qbList = document.getElementById('qb-list');
        if (!qbList) return;

        if (this.state.units.length === 0) {
            qbList.innerHTML = '<div class="no-data">No units available for this subject.</div>';
            return;
        }

        qbList.innerHTML = this.state.units.map((unit, index) => `
            <div class="unit-card" onclick="QuestionBankManager.loadUnit(${index})" style="cursor:pointer; margin-bottom: 1rem;">
                <div class="unit-number">Unit ${index + 1}</div>
                <div class="unit-name">${unit.unit_name || 'Unnamed Unit'}</div>
                <div class="unit-stats">
                    <span>📝 ${unit.mcqs?.length || 0} MCQs</span>
                    <span>📖 ${unit.theory_questions?.length || 0} Theory</span>
                    <span>💻 ${unit.coding_questions?.length || 0} Coding</span>
                </div>
            </div>
        `).join('');
    },

    /**
     * Load a specific unit and render its questions
     */
    loadUnit(unitIndex) {
        if (unitIndex < 0 || unitIndex >= this.state.units.length) return;
        this.state.activeUnit = this.state.units[unitIndex];
        this.renderQuestions();
    },

    /**
     * Render questions into the qb-list area
     */
    renderQuestions() {
        const qbList = document.getElementById('qb-list');
        if (!qbList || !this.state.activeUnit) return;

        const unit = this.state.activeUnit;
        let html = `
            <button class="back-btn" onclick="QuestionBankManager.renderUnits()" style="margin-bottom:1rem">← Back to Units</button>
            <h2 style="color:var(--primary); margin-bottom:1.5rem;">${unit.unit_name}</h2>
        `;

        // Render MCQs
        if (unit.mcqs?.length > 0) {
            html += `<h3 class="qb-section-title">📝 MCQs (${unit.mcqs.length})</h3>`;
            html += unit.mcqs.map((q, i) => `
                <div class="qb-question-card">
                    <div class="qb-question-text">Q${i + 1}. ${q.question}</div>
                    <div class="qb-options-grid">
                        ${q.options.map((opt, j) => `
                            <div class="qb-option ${String.fromCharCode(65 + j) === q.correct_option ? 'correct' : ''}">
                                ${String.fromCharCode(65 + j)}. ${opt}
                            </div>
                        `).join('')}
                    </div>
                    <div class="qb-explanation">
                        <strong>Answer: ${q.correct_option}</strong> - ${q.explanation}
                    </div>
                    <div class="qb-meta">Difficulty: ${q.difficulty}</div>
                </div>
            `).join('');
        }

        // Render Theory
        if (unit.theory_questions?.length > 0) {
            html += `<h3 class="qb-section-title">📖 Theory Questions (${unit.theory_questions.length})</h3>`;
            html += unit.theory_questions.map((q, i) => `
                <div class="qb-question-card theory">
                    <div class="qb-question-text">Q${i + 1}. ${q.question} (${q.marks} marks)</div>
                    <div class="qb-answer-box">
                        <strong>Model Answer:</strong><p>${q.model_answer}</p>
                    </div>
                    <div class="qb-key-points">
                        <strong>Key Points:</strong> ${q.key_points.join(', ')}
                    </div>
                    <div class="qb-meta">Difficulty: ${q.difficulty}</div>
                </div>
            `).join('');
        }

        // Render Coding / Practical
        if ((unit.coding_questions?.length > 0) || (unit.practical_questions?.length > 0)) {
            const items = unit.coding_questions || unit.practical_questions;
            const isPractical = !!unit.practical_questions;
            html += `<h3 class="qb-section-title">${isPractical ? '📖 Practical Scenarios' : '💻 Coding Challenges'} (${items.length})</h3>`;
            html += items.map((q, i) => `
                <div class="qb-question-card ${isPractical ? 'theory' : 'coding'}">
                    <div class="qb-question-text">Q${i + 1}. ${isPractical ? q.scenario : q.problem_statement}</div>
                    ${isPractical ? `
                        <div class="qb-answer-box">
                            <strong>Task:</strong> ${q.task}
                        </div>
                        <div class="qb-explanation">
                            <strong>Expected Commands:</strong> <code>${(q.expected_git_commands || []).join(', ')}</code>
                        </div>
                    ` : `
                        ${q.code_solution ? `
                            <div class="qb-code-solutions">
                                <div class="code-sol"><strong>C:</strong> <pre><code>${(q.code_solution.C || "").replace(/</g, "&lt;")}</code></pre></div>
                                <div class="code-sol"><strong>JS:</strong> <pre><code>${(q.code_solution.JavaScript || "").replace(/</g, "&lt;")}</code></pre></div>
                                <div class="code-sol"><strong>Py:</strong> <pre><code>${(q.code_solution.Python || "").replace(/</g, "&lt;")}</code></pre></div>
                            </div>
                        ` : `
                            <div class="qb-code-preview">
                                <pre><code>${(q.code_html || q.code_css || q.code_js || q.code_c || "").replace(/</g, "&lt;")}</code></pre>
                            </div>
                        `}
                    `}
                    <div class="qb-meta">Difficulty: ${q.difficulty}</div>
                </div>
            `).join('');
        }

        qbList.innerHTML = html;
        if (typeof hljs !== "undefined") hljs.highlightAll();
    }
};

// -------------------------------------------------------------
// Initialization
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    console.log("🚀 Initializing Dashboard...");
    
    // Initialize main app
    init();
    
    // Load all test banks
    console.log("📦 Loading test banks...");
    
    const testBanks = [
        { id: 'c_language', paths: ['test_data/c_language.json', 'intro_to_c.json'] },
        { id: 'maths', paths: ['test_data/maths.json'] },
        { id: 'html_css_js', paths: ['test_data/html_css_js.json'] },
        { id: 'js_backend', paths: ['test_data/js_backend.json'] },
        { id: 'git_github', paths: ['test_data/git_github.json'] }
    ];
    
    for (const bank of testBanks) {
        let loaded = false;

        // Try offline fallback first if running locally (CORS fix)
        if (window.OFFLINE_TEST_BANKS && window.OFFLINE_TEST_BANKS[bank.id]) {
            console.log(`📦 Using offline fallback for ${bank.id}`);
            QuestionBankManager.registerTestBank(bank.id, window.OFFLINE_TEST_BANKS[bank.id]);
            loaded = true;
        }

        if (!loaded) {
            for (const path of bank.paths) {
                try {
                    console.log(`⏳ Attempting to fetch ${bank.id} from ${path}...`);
                    const response = await fetch(path);
                    if (response.ok) {
                        const data = await response.json();
                        QuestionBankManager.registerTestBank(bank.id, data);
                        loaded = true;
                        break; 
                    }
                } catch (error) {
                    console.warn(`⚠️ Path ${path} failed for ${bank.id}:`, error);
                }
            }
        }
        if (!loaded) console.error(`❌ All paths (including offline) failed for ${bank.id}`);
    }
    
    console.log("✅ Initialization complete. Registered banks:", Object.keys(QuestionBankManager.state.testBanks));
});


// =========================================
// EXAM MODE SYSTEM
// =========================================

// Exam Mode State
const ExamModeState = {
    isExamMode: false,
    currentDay: null,
    currentSubject: null,
    mcqStats: {
        total: 0,
        attempted: 0,
        correct: 0,
        weak: []
    }
};

// Toggle Exam Mode
function toggleExamMode(enable) {
    ExamModeState.isExamMode = enable;
    
    // Update UI
    document.body.classList.toggle('exam-mode', enable);
    document.getElementById('normal-mode-btn').classList.toggle('active', !enable);
    document.getElementById('exam-mode-btn').classList.toggle('active', enable);
    
    // Show/hide day selector
    const daySelector = document.getElementById('day-selector');
    if (enable) {
        daySelector.classList.remove('hidden');
        // Auto-select Day 1
        selectDay(1);
    } else {
        daySelector.classList.add('hidden');
        // Return to normal study view
        document.getElementById('exam-view').classList.remove('active');
        document.getElementById('study-view').classList.add('active');
    }
}

// Select Day
function selectDay(day) {
    ExamModeState.currentDay = day;
    
    // Update day button states
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.day) === day);
    });
    
    // Load day-specific content
    loadDayContent(day);
}

// Load Day Content
function loadDayContent(day) {
    const dayMapping = {
        1: 'js_backend',
        2: 'html',
        3: 'maths',
        4: 'revision_mock'
    };
    
    const subject = dayMapping[day];
    
    if (day === 4) {
        // Day 4: Revision + Mock Test
        showRevisionMode();
    } else {
        // Days 1-3: Subject-specific exam view
        loadExamView(subject);
    }
}

// Load Exam View for Subject
async function loadExamView(subjectKey) {
    ExamModeState.currentSubject = subjectKey;
    
    // Show exam view
    document.getElementById('study-view').classList.remove('active');
    document.getElementById('test-center-view').classList.remove('active');
    document.getElementById('question-bank-view').classList.remove('active');
    document.getElementById('exam-view').classList.add('active');
    
    // Update breadcrumbs
    const config = UI_CONFIG[subjectKey];
    document.getElementById('current-subject').innerHTML = `${config.icon} ${config.name} - Exam Mode`;
    document.getElementById('current-topic').textContent = `Day ${ExamModeState.currentDay}`;
    
    // Load data
    let dataPath = null;
    if (subjectKey === 'js_backend') dataPath = 'test_data/js_backend.json';
    else if (subjectKey === 'html') dataPath = 'test_data/html_css_js.json';
    else if (subjectKey === 'maths') dataPath = 'test_data/maths.json';
    
    if (dataPath) {
        try {
            const res = await fetch(dataPath);
            const data = await res.json();
            
            // Render panels
            renderMCQBank(data);
            render3MarkAnswers(data);
            renderRevisionCards(data);
        } catch (error) {
            console.error('Failed to load exam data:', error);
        }
    }
}

// Render MCQ Bank
function renderMCQBank(data) {
    const container = document.getElementById('mcq-container');
    container.innerHTML = '';
    
    // Collect all MCQs from all units
    const allMCQs = [];
    data.units.forEach(unit => {
        if (unit.mcqs) {
            unit.mcqs.forEach(mcq => {
                allMCQs.push({ ...mcq, unit: unit.unit_name });
            });
        }
    });
    
    // Limit to 40 MCQs
    const selectedMCQs = allMCQs.slice(0, 40);
    ExamModeState.mcqStats.total = selectedMCQs.length;
    
    selectedMCQs.forEach((mcq, index) => {
        const card = document.createElement('div');
        card.className = 'mcq-card';
        card.innerHTML = `
            <div class="mcq-question">
                <strong>Q${index + 1}.</strong> ${mcq.question}
            </div>
            <div class="mcq-options">
                ${mcq.options.map((opt, i) => `
                    <div class="mcq-option" data-mcq-id="${mcq.id}" data-option="${String.fromCharCode(65 + i)}" onclick="selectMCQOption(this, ${mcq.id}, '${String.fromCharCode(65 + i)}')">
                        ${opt}
                    </div>
                `).join('')}
            </div>
            <div class="mcq-explanation" id="explanation-${mcq.id}">
                <p><strong>Correct Answer:</strong> ${mcq.correct_option}</p>
                <p><strong>Explanation:</strong> ${mcq.explanation}</p>
            </div>
            <div class="mcq-actions">
                <button onclick="toggleExplanation(${mcq.id})">Show Answer</button>
                <button onclick="markAsWeak(${mcq.id})">Mark Weak</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Select MCQ Option
function selectMCQOption(element, mcqId, selectedOption) {
    // Remove previous selection
    const siblings = element.parentElement.querySelectorAll('.mcq-option');
    siblings.forEach(opt => opt.classList.remove('selected'));
    
    // Add selection
    element.classList.add('selected');
}

// Toggle Explanation
function toggleExplanation(mcqId) {
    const explanation = document.getElementById(`explanation-${mcqId}`);
    explanation.classList.toggle('visible');
}

// Mark as Weak
function markAsWeak(mcqId) {
    if (!ExamModeState.mcqStats.weak.includes(mcqId)) {
        ExamModeState.mcqStats.weak.push(mcqId);
        updateMCQStats();
    }
}

// Update MCQ Stats
function updateMCQStats() {
    document.getElementById('mcq-accuracy').textContent = 
        ExamModeState.mcqStats.total > 0 
            ? Math.round((ExamModeState.mcqStats.correct / ExamModeState.mcqStats.attempted) * 100) + '%'
            : '0%';
    document.getElementById('weak-mcqs-count').textContent = ExamModeState.mcqStats.weak.length;
}

// Render 3-Mark Answers
function render3MarkAnswers(data) {
    const container = document.getElementById('answer-container');
    container.innerHTML = '';
    
    // Collect theory questions (3-mark format)
    const allAnswers = [];
    data.units.forEach(unit => {
        if (unit.theory_questions) {
            unit.theory_questions.forEach(q => {
                allAnswers.push({ ...q, unit: unit.unit_name });
            });
        }
    });
    
    // Limit to 20-25 answers
    const selectedAnswers = allAnswers.slice(0, 25);
    
    selectedAnswers.forEach((answer, index) => {
        const card = document.createElement('div');
        card.className = 'answer-card';
        
        // Format model answer to be concise (5-6 lines)
        const formattedAnswer = formatAs3MarkAnswer(answer);
        
        card.innerHTML = `
            <div class="answer-question">
                <strong>Q${index + 1}.</strong> ${answer.question}
            </div>
            <div class="ideal-answer">
${formattedAnswer}
            </div>
            <div class="answer-actions">
                <button onclick="alert('Marked as important!')">Mark Important</button>
                <button onclick="alert('Added to revision list!')">Revise Again</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Format as 3-Mark Answer
function formatAs3MarkAnswer(question) {
    // If model_answer exists, use it; otherwise create from key_points
    if (question.model_answer) {
        return question.model_answer;
    }
    
    // Create concise answer from key points
    let answer = `${question.question.split('?')[0]}:\n\n`;
    if (question.key_points && question.key_points.length > 0) {
        answer += 'Key Points:\n';
        question.key_points.slice(0, 3).forEach(point => {
            answer += `• ${point}\n`;
        });
    }
    return answer;
}

// Render Revision Cards
function renderRevisionCards(data) {
    const container = document.getElementById('revision-container');
    container.innerHTML = '<div class="revision-cards"></div>';
    const cardsContainer = container.querySelector('.revision-cards');
    
    // Create revision cards from key concepts
    const revisionCards = extractRevisionCards(data);
    
    revisionCards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'revision-card';
        cardEl.innerHTML = `
            <div class="revision-category">${card.category}</div>
            <div class="revision-fact">${card.fact}</div>
        `;
        cardsContainer.appendChild(cardEl);
    });
}

// Extract Revision Cards
function extractRevisionCards(data) {
    const cards = [];
    
    // Extract from MCQs and theory questions
    data.units.forEach(unit => {
        // From MCQs
        if (unit.mcqs) {
            unit.mcqs.slice(0, 5).forEach(mcq => {
                if (mcq.explanation) {
                    cards.push({
                        category: 'Quick Facts',
                        fact: mcq.explanation
                    });
                }
            });
        }
        
        // From theory key points
        if (unit.theory_questions) {
            unit.theory_questions.slice(0, 3).forEach(q => {
                if (q.key_points) {
                    q.key_points.forEach(point => {
                        cards.push({
                            category: 'Key Concepts',
                            fact: point
                        });
                    });
                }
            });
        }
    });
    
    // Limit to 30 cards
    return cards.slice(0, 30);
}

// Show Revision Mode (Day 4)
function showRevisionMode() {
    const container = document.getElementById('exam-view');
    container.classList.add('active');
    
    document.getElementById('current-subject').textContent = '🔥 Day 4: Final Revision';
    document.getElementById('current-topic').textContent = 'All Subjects Review';
    
    // Show combined revision from all 3 subjects
    const examContent = container.querySelector('.exam-content-wrapper');
    examContent.innerHTML = `
        <div class="exam-panel">
            <h2>🎯 FINAL REVISION - ALL SUBJECTS</h2>
            <p style="color: var(--text-muted); margin-bottom: 2rem;">
                Review weak MCQs and important answers from all subjects before the mock test.
            </p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                <button class="mode-btn" onclick="loadExamView('js_backend')" style="padding: 1rem;">
                    ⚙️ JS Backend Revision
                </button>
                <button class="mode-btn" onclick="loadExamView('html')" style="padding: 1rem;">
                    🎨 HTML/CSS/JS Revision
                </button>
                <button class="mode-btn" onclick="loadExamView('maths')" style="padding: 1rem;">
                    📐 Maths Revision
                </button>
            </div>
        </div>
        <div class="exam-panel">
            <h2>📝 MOCK TEST</h2>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">
                Take a full mock test (70 marks) to simulate exam conditions.
            </p>
            <button class="mode-btn" onclick="alert('Mock test feature coming soon!')" style="padding: 1rem; background: var(--primary); color: white;">
                Start Mock Test (60 minutes)
            </button>
        </div>
    `;
}
