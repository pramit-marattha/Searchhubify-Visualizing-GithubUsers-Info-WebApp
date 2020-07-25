import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import loginImg from '../images/login-img.svg';
const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (<Wrapper>
    <div className="container">

      <h1>Searchhubify</h1>
      <img src={loginImg} alt="github user" />
      <button className='btn' onClick={loginWithRedirect}>Sign-In | Sign-up</button>
    </div>
  </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
  button {
	box-shadow: 3px 18px 15px -4px #3e7327;
	background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
	background-color:#77b55a;
	border-radius:27px;
	border:1px solid #4b8f29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	font-weight:bold;
	font-style:italic;
	padding:10px 34px;
	text-decoration:none;
	text-shadow:5px 7px 7px #5b8a3c;

&:hover {
	background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
	background-color:#72b352;
}
&:active {
	position:relative;
	top:1px;
}
}


`;
export default Login;
