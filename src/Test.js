import React, { useState } from 'react';
import Question from './Question';

const questions = [

   {
    question: "Q1. What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris"
  },
  {
    question: "Q2. What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "Q3. It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
    options: ["Sunday", "Saturday", "Friday", "Wednesday"],
    correctAnswer: "Friday"
  },
  // ... (Your questions array here)
];

const Test = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

 // const calculateScore = () => {
  //  return questions.reduce((score, question) => {
    //  return score + (answers[question.question] === question.correctAnswer ? 1 : 0);
    //}, 0);
 // };

  // Function to disable text selection
  const preventSelection = (event) => {
    event.preventDefault();
  };

  // Function to disable right-click
  const disableRightClick = (event) => {
    if (event.button === 2) {
      event.preventDefault();
    }
  };

  return (
    <div className="container mt-5" onContextMenu={disableRightClick} onCopy={preventSelection} onDragStart={preventSelection} onSelectStart={preventSelection}>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            options={q.options}
            onAnswer={(answer) => handleAnswer(q.question, answer)}
          />
        ))}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
       
      </form>
      {submitted && (
       
        <div className="alert alert-success mt-4">
        <strong>You've completed test successfully!</strong> 
        </div>
          
      )}
    </div>
  );
};

export default Test;
//<div className="alert alert-info mt-4">
//<h4>Your Score: {calculateScore()} / {questions.length}</h4>
  //      </div>