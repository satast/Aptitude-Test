import React from 'react';

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{question}</h5>
        {options.map((option, index) => (
          <div className="form-check" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name={question}
              value={option}
              id={`${question}-${index}`}
              onChange={(e) => onAnswer(e.target.value)}
            />
            <label className="form-check-label" htmlFor={`${question}-${index}`}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
