const express = require('express');
const router = express.Router();

// Mock Database Interface
const db = {
    query: async (sql, params) => { return []; /* Placeholder */ }
};

// ------------------------------------------------------------------
// 1. IMPORT DATA
// POST /api/test/import
// ------------------------------------------------------------------
router.post('/import', async (req, res) => {
    try {
        const { subject, unit, mcqs, theory_questions, coding_questions } = req.body;
        
        // Transaction Start
        // 1. Get or Create Subject
        // 2. Create Unit
        // 3. Bulk Insert Questions
        
        res.status(201).json({ message: `Imported Unit: ${unit} successfully.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ------------------------------------------------------------------
// 2. READ DATA
// ------------------------------------------------------------------

// GET /api/subjects
router.get('/subjects', async (req, res) => {
    // SELECT * FROM subjects
    res.json([
        { id: 1, name: 'HTML / CSS / JavaScript' },
        { id: 2, name: 'C Language' }
    ]);
});

// GET /api/units/:subjectId
router.get('/units/:subjectId', async (req, res) => {
    const { subjectId } = req.params;
    // SELECT * FROM test_units WHERE subject_id = $1
    res.json([
        { id: 101, unit_name: 'Intro to C Programming' },
        { id: 102, unit_name: 'Control Structures' }
    ]);
});

// GET /api/test/:type/:unitId
// type = 'mcq' | 'theory' | 'coding'
router.get('/test/:type/:unitId', async (req, res) => {
    const { type, unitId } = req.params;
    let table = '';
    
    switch(type) {
        case 'mcq': table = 'mcq_questions'; break;
        case 'theory': table = 'theory_questions'; break;
        case 'coding': table = 'coding_questions'; break;
        default: return res.status(400).json({error: 'Invalid test type'});
    }

    // Logic: 
    // If Subject is 'Maths' and type is 'coding', return []
    // SELECT * FROM ${table} WHERE unit_id = $1 ORDER BY RANDOM() LIMIT 10 (for MCQ)
    
    res.json({
        unit_id: unitId,
        questions: [] // Return fetched rows
    });
});

// ------------------------------------------------------------------
// 3. WRITE RESULTS
// POST /api/test/result
// ------------------------------------------------------------------
router.post('/result', async (req, res) => {
    const { user_id, subject_id, unit_id, test_type, score, max_score, time_taken } = req.body;
    
    // INSERT INTO results (...) VALUES (...)
    
    res.status(201).json({ message: 'Score saved!' });
});

// ------------------------------------------------------------------
// 4. DASHBOARD STATS
// GET /api/dashboard/:userId
// ------------------------------------------------------------------
router.get('/dashboard/:userId', async (req, res) => {
    const { userId } = req.params;
    
    // Complex Aggregation:
    // 1. Average Score per Subject
    // 2. Recent Activity
    // 3. Strongest/Weakest Units
    
    res.json({
        stats: {
            total_tests: 15,
            avg_accuracy: '85%'
        }
    });
});

module.exports = router;
