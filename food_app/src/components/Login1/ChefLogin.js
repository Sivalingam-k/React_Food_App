import React, { useState } from 'react';
import '../Login1/ChefLogin.css';

const ChefLogin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Chef Logging in...', formData);
    } else if (isForgotPassword) {
      console.log('Sending password reset email...', formData.email);
    } else {
      console.log('Registering...', formData);
    }
    setFormData({ username: '', password: '', email: '' });
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setIsLogin(false);
    // setIsRegister(false);
  };

  return (
    <div className="chef-login-container">
      <div className="image-section">
        <h2 className="welcome-text">Welcome To Our Application</h2>
      </div>
      <div className="form-section card">
        <div className="card-body">
          <h2 className="card-title text-center">
            {isForgotPassword ? 'Forgot Password?' : isLogin ? 'Chef Login' : 'Sign Up'}
          </h2>
          <form onSubmit={handleSubmit}>
            {isForgotPassword ? (
              <>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </>
            ) : (
              <>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                {!isLogin && (
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">{isLogin ? 'Login' : 'Register'}</button>
              </>
            )}
          </form>
          <div className="text-center mt-3">
            {isForgotPassword ? (
              <p>
                Remembered your password? <span onClick={() => setIsForgotPassword(false) || setIsLogin(true)} className="toggle-link">Login</span>
              </p>
            ) : (
              <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                  {isLogin ? 'Sign Up' : 'Login'}
                </span>
              </p>
            )}
            {isLogin && (
              <p>
              <span onClick={toggleForgotPassword} style={{ color: 'blue', cursor: 'pointer' }}>Forgot Password?</span>
            </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefLogin;
