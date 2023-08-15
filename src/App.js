import React, { useState } from 'react';
import './app.css';
import logo from './images/logo.svg';
import illustration from './images/illustration-dashboard.png';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

function App() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFocused(true);

    if (email.trim() === '') {
      setErrorMessage('Whoops! It looks like you forgot to add your email');
    } else if (!isEmailValid(email)) {
      setErrorMessage('Please provide a valid email address');
    } else {
      e.target.submit();
      console.log('Form submitted successfully');
      setErrorMessage('');
      setEmail('');
    }
  };

  return (
    <main>
      <img className="logo" src={logo} alt="logo" />
      <h1 className="title">
        We are launching <span>soon!</span>
      </h1>
      <p className="text">Subscribe and get notified</p>

      <form onSubmit={handleSubmit} className="form" action="#">
        <div className="inputContainer">
          <input
            placeholder="Your email address.."
            className={`input ${isFocused ? 'isFocused' : ''}`}
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </div>
        <div className="btnContainer">
          <button type="submit" className="btn">
            Notify Me
          </button>
        </div>
      </form>
      <img className="illustration" src={illustration} alt="illustration" />
      <div className="footer">
        <div className="links">
          <a className="icon" href="/">
            <BiLogoFacebook />
          </a>
          <a className="icon" href="/">
            <AiOutlineTwitter />
          </a>
          <a className="icon" href="/">
            <AiOutlineInstagram />
          </a>
        </div>
        <div className="copyRight">© Copyright Ping. All rights reserved.</div>
      </div>
    </main>
  );
}

export default App;
