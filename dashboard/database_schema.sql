-- Database Schema for Study Dashboard Test Feature
-- Compatible with PostgreSQL / MySQL

-- 1. Subjects Table
CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Test Units (Chapters/Topics)
CREATE TABLE test_units (
    id SERIAL PRIMARY KEY,
    subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
    unit_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. MCQ Questions
CREATE TABLE mcq_questions (
    id SERIAL PRIMARY KEY,
    unit_id INTEGER REFERENCES test_units(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL,
    correct_option CHAR(1) CHECK (correct_option IN ('A', 'B', 'C', 'D')),
    explanation TEXT,
    difficulty VARCHAR(20) CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Theory Questions
CREATE TABLE theory_questions (
    id SERIAL PRIMARY KEY,
    unit_id INTEGER REFERENCES test_units(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    model_answer TEXT NOT NULL,
    key_points JSONB, -- Stores array of key points for auto-grading hints
    marks INTEGER DEFAULT 5,
    difficulty VARCHAR(20) CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Coding Questions
CREATE TABLE coding_questions (
    id SERIAL PRIMARY KEY,
    unit_id INTEGER REFERENCES test_units(id) ON DELETE CASCADE,
    problem_statement TEXT NOT NULL,
    input_format TEXT,
    output_format TEXT,
    constraints TEXT,
    sample_input TEXT,
    sample_output TEXT,
    solution_explanation TEXT,
    code_c TEXT, -- Reference solution or starter code
    code_js TEXT,
    code_py TEXT,
    difficulty VARCHAR(20) CHECK (difficulty IN ('Easy', 'Medium', 'Hard')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. User Results
CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL, -- Assuming string ID from auth provider
    subject_id INTEGER REFERENCES subjects(id),
    unit_id INTEGER REFERENCES test_units(id),
    test_type VARCHAR(20) CHECK (test_type IN ('MCQ', 'Theory', 'Coding')),
    score INTEGER NOT NULL,
    max_score INTEGER NOT NULL,
    time_taken_seconds INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_test_units_subject ON test_units(subject_id);
CREATE INDEX idx_mcq_unit ON mcq_questions(unit_id);
CREATE INDEX idx_theory_unit ON theory_questions(unit_id);
CREATE INDEX idx_coding_unit ON coding_questions(unit_id);
CREATE INDEX idx_results_user ON results(user_id);
