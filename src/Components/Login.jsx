import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { createUser, signIn } from '../firebase';
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSignIn(e) {
    e.preventDefault();
    signIn(email, password)
      .then((userCredentials) => {
        alert(userCredentials);
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(password);
  }
  function register(e) {
    e.preventDefault();
    createUser(email, password)
      .then((userCredentials) => {
        alert(userCredentials);
        console.log(userCredentials);
      })
      .catch((error) => window.alert(error.message));
  }
  console.log('foo');

  return (
    <>
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
        <form action="">
          <div className="login__detailsContainer">
            <h1>Sign in</h1>
            <label htmlFor="">E-mail</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="">Password</label>
            <input onChange={handlePassword} value={password} type="password" />
            <button type="submit" onClick={handleSignIn}>
              Sign In
            </button>
            <p>
              By sigining in you agre to Amazon's Conditions of Use & Sale.
              Please see our Privacy Notice, Our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <button onClick={register}>Create your Amazon Account</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
