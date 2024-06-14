import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        navigate('/main');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Server error:', err);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <h4 style={{color: "red"}}>Mind some general instructions before login.</h4>
              <p> ⟫ Verify once again that you have answered all the questions? Because you can't modify answers once you click submit button.</p>
              <p> ⟫ Your login credentials gets invalid the time of once you've logged in and submit the test.</p>
              <p> ⟫ Timer is running in right corner of the page. Always minds it.</p>
              <p> ⟫ The test page gets redirected to login page automatically once timer completed.</p>
              <p> ⟫ The test page is gets invalid after the times of timer completion.</p>
              <p> ⟫ If your facing any issue during the login, inform immediately to already contacted mail.</p>
              <p> ⟫ Your username is your registered mail id and password is your date of birth.</p>

              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger mb-3">{error}</div>}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username (eg: abc123@gmail.com)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password (eg: 01012000)</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
