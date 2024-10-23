import React, { useState } from 'react';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { Carousel } from 'bootstrap';
import Content from './Content';
import Popular from './Popular';
import Footer from './Footer';
import axios from 'axios';

const Sidebar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isPopularOpen,setIsPopularOpen]=useState(true);
  const[isContentOpen,setIsContentOpen]=useState(true);

  const [captchaValue, setCaptchaValue] = useState(null); // Store the CAPTCHA value
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
});
const initialFormData = {
  username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
};
const [errors, setErrors] = useState({});
const navigate=useNavigate();
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};
const validateForm = () => {
  const { username, email, password, confirmPassword } = formData;
  const newErrors = {};
  
  if (!username) newErrors.username = 'Username is required';
  if (!email) newErrors.email = 'Email is required';
  if (!password) newErrors.password = 'Password is required';
  if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords must match';

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const toggleLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
    setIsForgotPasswordOpen(false);
    setIsChangePasswordOpen(false);
    setIsContentOpen(false);
    setIsPopularOpen(false);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
    setIsForgotPasswordOpen(false);
    setIsChangePasswordOpen(false);
  };

  const toggleForgotPassword = () => {
    setIsForgotPasswordOpen(true);
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsChangePasswordOpen(false);
  };

  const toggleChangePassword = () => {
    setIsChangePasswordOpen(true);
    setIsForgotPasswordOpen(false);
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Update CAPTCHA value
  };

  const handleLoginSubmit =async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
        const response = await axios.get('http://localhost:8888/users');
        const users = response.data;

        // Check if the username and password match a registered user
        const user = users.find(u => u.username === username && u.password === password );

        if (user.role==="user") {
            alert(`Welcome, ${user.username}!`); // Placeholder action
            navigate('/userDashboard')
        } 
        else if (user.role==="cheff") {
          alert(`Welcome, ${user.username}!`); // Placeholder action
          navigate('/chefDashboard')
      } 
        else {
            alert('Invalid username or password');
        }
       
    } catch (err) {
        console.error('Error fetching users:', err);
        alert('Error fetching users');
    }
  };

  const handleRegisterSubmit = async(event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
          const response = await axios.post('http://localhost:8888/users', formData);
          console.log('Response:', response.data);
          if(window.confirm){
          window.alert("User Registered Successfully!!");
         setFormData(initialFormData);

          }
          
      } catch (error) {
          console.error('Error registering user:', error);
      }
  }
   
  };

  const handleChangePasswordSubmit = (event) => {
    event.preventDefault();
    if (captchaValue) {
      // Handle change password submission
      console.log("Password changed successfully");
    } else {
      alert("Please complete the CAPTCHA.");
    }
  };

  return (
  <div>
    <header className="header d-flex align-items-center justify-content-between p-3 bg-light">
     <div className="logo">
                <img src="logo192.png" alt="Logo" width="50" height="50" />
            </div>
            <form className="search-form mx-auto">
                <input 
                    className="form-control" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                />
            </form>
            <button className="btn btn-primary login-button" onClick={toggleLogin}>Login</button>
    

       
      

      {/* Login Form */}
      {isLoginOpen && (
        <div className="popup">
          <div className="popup-content animate__animated animate__fadeIn">
          <span
        className="close"
        onClick={() => {
          setIsLoginOpen(false);
          setIsContentOpen(true);
          setIsPopularOpen(true);
        }}
      >&times;</span>
            <h2 className='head'>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <input type="text" name='username' className="form-control" placeholder="Username" required />
              </div>
              <div className="form-group">
                <input type="password" name='password' className="form-control" placeholder="Password" required />
              </div>
              <p>
                <span onClick={toggleForgotPassword} style={{ color: 'blue', cursor: 'pointer' }}>Forgot Password?</span>
              </p>
              {/* <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"  // Replace with your site key
                onChange={handleCaptchaChange}
              /> */}
              <button type="submit" className="btn btn-success">Login</button>
              <div className="submit-line">By signing in, you agree to our terms and conditions.</div>
            </form>
            <p>
              Don't have an account? <span onClick={toggleRegister} style={{ color: 'green', cursor: 'pointer' }}>Sign Up</span>
            </p>
          </div>
        </div>
      )}

      {/* Registration Form */}
      {isRegisterOpen && (
        <div className="popup">
          <div className="popup-content animate__animated animate__fadeIn">
            <span className="close" onClick={() =>{setIsRegisterOpen(false);setIsContentOpen(true);
          setIsPopularOpen(true);}}>&times;</span>
            <h2 className='head'>Sign Up</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <input type="text"   name="username" className="form-control" placeholder="Username" value={formData.username}
                        onChange={handleChange} required />
                         {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
              </div>
              <div className="form-group">
                <input type="email"  name="email" className="form-control" placeholder="Email"  value={formData.email}
                        onChange={handleChange} required />
                           {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>
              <div className="form-group">
                <input type="password"  name="password" className="form-control" placeholder="Password"  value={formData.password}
                        onChange={handleChange} required />
                          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              </div>
              <div className="form-group">
                <input type="password"  name="confirmPassword" className="form-control" placeholder="Confirm Password"  value={formData.confirmPassword}
                        onChange={handleChange} required />
                          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
              </div>
              <div  className="form-group">
                    <select name="role" value={formData.role} className="form-control" onChange={handleChange}>
                        <option value="user">User</option>
                        <option value="cheff">Chef</option>
                    </select>
                </div>
              {/* <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"  // Replace with your site key
                onChange={handleCaptchaChange}
              /> */}
              <button type="submit" className="btn btn-success">Register</button>
              <div className="submit-line">By registering, you accept our privacy policy.</div>
            </form>
            <p>
              Already have an account? <span onClick={toggleLogin} style={{ color: 'green', cursor: 'pointer' }}>Login</span>
            </p>
          </div>
        </div>
      )}

      {/* Forgot Password Form */}
      {isForgotPasswordOpen && (
        <div className="popup">
          <div className="popup-content animate__animated animate__fadeIn">
            <span className="close" onClick={() => setIsForgotPasswordOpen(false)}>&times;</span>
            <h2 className='head'>Forgot Password?</h2>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              {/* <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"  // Replace with your site key
                onChange={handleCaptchaChange}
              /> */}
              <button type="submit" onClick={toggleChangePassword} className="btn btn-success">Submit</button>
              <div className="submit-line">We will send you an email to reset your password.</div>
            </form>
            <p>
              Password remembered? <span onClick={toggleLogin} style={{ color: 'green', cursor: 'pointer' }}>Login</span>
            </p>
          </div>
        </div>
      )}

      {/* Change Password Form */}
      {isChangePasswordOpen && (
        <div className="popup">
          <div className="popup-content animate__animated animate__fadeIn">
            <span className="close" onClick={() => setIsChangePasswordOpen(false)}>&times;</span>
            <h2 className='head'>Change Password</h2>
            <form onSubmit={handleChangePasswordSubmit}>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Old Password" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="New Password" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Confirm Password" required />
              </div>
              {/* <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"  // Replace with your site key
                onChange={handleCaptchaChange}
              /> */}
              <button type="submit" className="btn btn-success">Change Password</button>
            </form>
          </div>
        </div>
      )}
    </header>
    {isContentOpen&&(<Content></Content> )}
    {isPopularOpen&&(<Popular></Popular> )}
    
    <Footer></Footer>
    </div>

  );
};

export default Sidebar;
