import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from './assets/logo.png';
import './App.css';

function Header() {
  const navigate = useNavigate();
  const initialTime = 1 * 60 * 60; // Initial time in seconds (1 minute)
  const [seconds, setSeconds] = useState(initialTime);
  const [timerCompleted, setTimerCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 0) {
          clearInterval(interval);
          setTimerCompleted(true);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timerCompleted) {
      navigate('/login'); // Redirect to login page when timer completes
    }
  }, [timerCompleted, navigate]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <header style={customStyle}>
      <div style={headerTop}>
        <h1 style={headername}>Aptitude Test</h1>
        <p style={impmsg}>
          * You are under our surveillance, so don't try to copy questions or any other malpractices!!! 
        </p>
        <p style={timerStyle}>Timer: {formatTime(seconds)}</p>
        <img src={logoImage} alt="Company Logo" style={logoStyle} />
      </div>
    </header>
  );
}

export default Header;

// ... (rest of your styles and constants)

const customStyle = {
  background: "#669999",
  margin: "auto -16px",
  padding: "0px 12px",
  fontFamily: "Times New Roman",
  fontWeight: "bold",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  display: "flex",
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center vertically
  overflow: "hidden"
};

const headerTop = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 0" // Added padding for visual space
};

const headername = {
  fontWeight: "bold",
  textShadow: "3px 3px 3px white",
  margin: "0 10px" // Added margin to prevent text from touching other elements
};

const impmsg = {
  animation: "runningText 10s linear infinite",
  color: "red",
  textShadow: "1px 1px 1px black",
  whiteSpace: "nowrap",
  margin: "0 10px" // Added margin to prevent text from touching other elements
};

const logoStyle = {
  height: "50px",
  width: "100px",
  margin: "0 10px" // Added margin to prevent logo from touching other elements
};

const timerStyle = {
  fontWeight: "bold",
  color: "Yellow",
  marginLeft: "300px",
  animation: "blinking 2s infinite" // Added margin to prevent timer from touching other elements
};