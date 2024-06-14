import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Question = ({ question, options = [], onAnswer }) => {
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

const Test = () => {
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook

  const questions = [
    {
      question: "Q1. An accurate clock shows 8 o'clock in the morning. Through how may degrees will the hour hand rotate when the clock shows 2 o'clock in the afternoon?",
      options: ["144°", "150°", "168°", "180°"],
      correctAnswer: "180°"
    },
    {
      question: "Q2.1397 x 1397 = ?  ",
      options: ["1951609", "1981709", "18362619", "2031719"],
      correctAnswer: "1951609"
    },
    {
      question: "Q3. It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
      options: ["Sunday", "Saturday", "Friday", "Wednesday"],
      correctAnswer: "Friday"
    },
    {
      question: "Q4.Two, trains, one from Howrah to Patna and the other from Patna to Howrah, start simultaneously. After they meet, the trains reach their destinations after 9 hours and 16 hours respectively. The ratio of their speeds is:",
      options: ["2 : 3", "4 : 3", "6 : 7", "9 : 16"],
      correctAnswer: "4 : 3"

    },
    {
      question: "Q5. A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
      options: ["120 metres", "180 metres", "324 metres", "150 metres"],
      correctAnswer: "150 metres"

    },
    {
      question: "Q6. What will be the ratio of simple interest earned by certain amount at the same rate of interest for 6 years and that for 9 years?",
      options: ["1 : 3", "1 : 4", "2 : 3", "Data inadequate"],
      correctAnswer: "2 : 3"
    },
    {
      question: "Q7. A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:",
      options: ["20 days", "22 1/2 days", "25 days", "30 days"],
      correctAnswer: "22 1/2 days"
    },
    {
      question: "Q8. A and B together can do a piece of work in 30 days. A having worked for 16 days, B finishes the remaining work alone in 44 days. In how many days shall B finish the whole work alone?",
      options: ["30 days", "40 days", "60 days", "70 days"],
      correctAnswer: "60 days"
    },
    {
      question: "Q9. What decimal of an hour is a second ?",
      options: [".0025", ".0256", ".00027", ".000126"],
      correctAnswer: ".00027"
    },
    {
      question: "Q10. 3889 + 12.952 - ? = 3854.002",
      options: ["47.095", "47.752", "47.932", "47.95"],
      correctAnswer: "47.95"
    },
    {
      question: "Q11. 8, 7, 11, 12, 14, 17, 17, 22, (....)",
      options: ["27", "20", "22", "24"],
      correctAnswer: "20"
    },
    {
      question: "Q12. 1, 2, 6, 15, 31, 56, 91. Find Wrong One.",
      options: ["31", "91", "56", "15"],
      correctAnswer: "91"
    },
    {
      question: "Q13.   A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "10"
    },
    {
      question: "Q14. The age of father 10 years ago was thrice the age of his son. Ten years hence, father's age will be twice that of his son. The ratio of their present ages is:",
      options: ["5 : 2", "7 : 3", "9 : 2", "13 : 4"],
      correctAnswer: "7 : 3"
    },
    {
      question: "Q15. The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
      options: ["9000", "9400", "9600", "9800"],
      correctAnswer: "9600"
    },
    {
      question: "Q16. The L.C.M. of two numbers is 48. The numbers are in the ratio 2 : 3. Then sum of the number is:",
      options: ["28", "32", "40", "64"],
      correctAnswer: "40"
    },
    {
      question: "Q17.Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?",
      options: ["12", "14", "27", "53"],
      correctAnswer: "14"
    },
    {
      question: "Q18. 6 10 14 18 22 26 30",
      options: ["36 40", "33 37", "34 36", "34 38"],
      correctAnswer: "34 38"
    },
    {
      question: "Q19. CMM, EOO, GQQ, _____, KUU",
      options: ["GRR", "GSS", "ISS", "ITT"],
      correctAnswer: "ISS"
    },
    {
      question: "Q20. QAR, RAS, SAT, TAU, _____",
      options: ["UAV", "UAT", "TAS", "TAT"],
      correctAnswer: "UAV"
    },
    {
      question: "Q21. Synonym: AUGUST ?",
      options: ["Common", "Ridiculous", "Dignified", "Petty"],
      correctAnswer: "Dignified"
    },
    {
      question: "Q22. Synonym: DISTINCTION ?",
      options: ["Diffusion", "Disagreement", "Different", "Degree"],
      correctAnswer: "Different"
    },
    {
      question: "Q23. The grapes are now ...... enough to be picked.",
      options: ["ready", "mature", "ripe", "advanced"],
      correctAnswer: "ripe"
    },
    {
      question: "Q24. A company manufactures light bulbs, and historically, 2% of the light bulbs are defective. If a quality control inspector randomly selects 50 light bulbs, what is the expected number of defective light bulbs in the sample?",
      options: ["0.5", "1", "2", "5"],
      correctAnswer: "2"
    },
    {
      question: "Q25. My first lesson ...... forgiveness came from my mother.",
      options: ["upon", "about", "in", "on"],
      correctAnswer: "on"
    },
    {
      question: "Q26. In a simple linear regression model, the equation of the line of best fit is given by 𝑦=3𝑥+2. If 𝑥 increases by 4 units, by how many units will 𝑦 increase?",
      options: ["6", "8", "12", "14"],
      correctAnswer: "12"
    }
  ];

  const handleAnswer = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const calculatedScore = questions.reduce((acc, q, index) => {
      return acc + (q.correctAnswer === answers[index] ? 1 : 0);
    }, 0);

    console.log("Calculated Score:", calculatedScore);

    const token = localStorage.getItem('token');

    try {
      await axios.post('/api/submit-test', { user: { username: 'your_username' }, answers, score: calculatedScore }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      alert("Test submitted successfully. \n Note: Your result will be notified via email as soon as possible. Check email often. \n Thank you for attempting the test");
      localStorage.removeItem('token'); // Remove the token to prevent re-login
      navigate('/login'); // Redirect to login page after successful submission
    } catch (error) {
      console.error('Error submitting test results:', error);
      if (error.response && error.response.data) {
        alert(`Failed to submit test results: ${error.response.data.message || 'Unauthorized'}`);
      } else {
        alert('Failed to submit test results. Please try again later.');
      }
    }
  };

  const preventActions = (event) => {
    if (event.type === 'copy' || event.type === 'dragstart' || event.type === 'selectstart') {
      event.preventDefault();
    }
  };

  return (
    <div className="container mt-5" onContextMenu={preventActions} onContextMenuCapture={preventActions} onCopy={preventActions} onDragStart={preventActions} onSelectStart={preventActions}>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <Question
            key={index}
            question={q.question}
            options={q.options}
            onAnswer={(answer) => handleAnswer(index, answer)}
          />
        ))}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Test;
