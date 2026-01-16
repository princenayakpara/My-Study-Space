import React, { useState, useEffect } from 'react';

// ==============================================================
// 1. SUBJECT SELECTION (Entry Point)
// ==============================================================
export const TestDashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    // fetch('/api/subjects').then(...)
    setSubjects([
      { id: 1, name: 'HTML / CSS / JavaScript', icon: '🎨' },
      { id: 2, name: 'C Language', icon: '💻' },
      { id: 5, name: 'Maths', icon: '📐' }
    ]);
  }, []);

  if (selectedSubject) {
    return <UnitSelection subject={selectedSubject} onBack={() => setSelectedSubject(null)} />;
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {subjects.map(sub => (
        <div key={sub.id}
          onClick={() => setSelectedSubject(sub)}
          className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 cursor-pointer transition">
          <span className="text-4xl">{sub.icon}</span>
          <h3 className="text-xl font-bold mt-2 text-white">{sub.name}</h3>
        </div>
      ))}
    </div>
  );
};

// ==============================================================
// 2. UNIT SELECTION
// ==============================================================
const UnitSelection = ({ subject, onBack }) => {
  const [units, setUnits] = useState([]);
  const [activeTest, setActiveTest] = useState(null); // { unitId, type }

  useEffect(() => {
    // fetch(`/api/units/${subject.id}`).then(...)
    setUnits([
      { id: 101, name: 'Basics & Syntax' },
      { id: 102, name: 'Pointers & Memory' }
    ]);
  }, [subject]);

  const startTest = (unitId, type) => {
    setActiveTest({ unitId, type });
  };

  if (activeTest) {
    return <TestRunner
      unitId={activeTest.unitId}
      type={activeTest.type}
      subjectId={subject.id}
      onExit={() => setActiveTest(null)}
    />;
  }

  return (
    <div className="p-6">
      <button onClick={onBack} className="text-gray-400 hover:text-white mb-4">← Back to Subjects</button>
      <h2 className="text-2xl font-bold text-white mb-6">{subject.name} - Select Unit</h2>

      <div className="space-y-4">
        {units.map(unit => (
          <div key={unit.id} className="bg-gray-900 border border-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-200">{unit.name}</h4>
            <div className="flex gap-3 mt-3">
              <button
                onClick={() => startTest(unit.id, 'mcq')}
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 text-sm">
                Start MCQ
              </button>
              <button
                onClick={() => startTest(unit.id, 'theory')}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 text-sm">
                Theory
              </button>
              {subject.name !== 'Maths' && (
                <button
                  onClick={() => startTest(unit.id, 'coding')}
                  className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 text-sm">
                  Coding Challenge
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==============================================================
// 3. TEST RUNNER (Generic Wrapper)
// ==============================================================
const TestRunner = ({ unitId, type, subjectId, onExit }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    // fetch(`/api/test/${type}/${unitId}`).then(...)
    console.log(`Fetching ${type} questions for unit ${unitId}`);
    // Mock Data
    setQuestions([
      { id: 1, question: "Sample Question?", options: ["A", "B", "C", "D"] }
    ]);
  }, []);

  if (questions.length === 0) return <div>Loading Test...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-900 min-h-screen text-white">
      <header className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
        <h2 className="text-xl font-bold uppercase">{type} Test</h2>
        <div className="text-red-400 font-mono">19:59</div>
      </header>

      <div className="mb-8">
        <div className="mb-4 text-gray-400">Question {currentIdx + 1} of {questions.length}</div>
        <p className="text-lg mb-6">{questions[currentIdx].question}</p>

        {/* Render Logic based on Type */}
        {type === 'mcq' && (
          <div className="grid grid-cols-1 gap-3">
            {questions[currentIdx].options.map(opt => (
              <button key={opt} className="p-3 text-left bg-gray-800 rounded hover:bg-gray-700 border border-transparent hover:border-blue-500">
                {opt}
              </button>
            ))}
          </div>
        )}

        {type === 'theory' && (
          <textarea className="w-full h-40 bg-gray-800 p-4 rounded text-white" placeholder="Type your answer here..."></textarea>
        )}

        {type === 'coding' && (
          <div className="bg-black p-4 font-mono text-green-400 rounded">
                 // Code Editor Placeholder
            console.log("Write code here...");
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <button className="px-6 py-2 bg-gray-700 rounded" onClick={onExit}>Quit</button>
        <button className="px-6 py-2 bg-blue-600 rounded">Next Question</button>
      </div>
    </div>
  );
};
