import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } = useAuth0();
  const isUser = isAuthenticated && user;



  return (<Wrapper>
    {isUser && user.picture && <img src={user.picture} alt={user.name} />}
    {isUser && user.name && <h4>Hello there, <strong>{user.name.toUpperCase()}</strong></h4>}
    {isUser ? (
      <button onClick={() => { logout({ returnTo: window.location.origin }) }}>Logout</button>
    ) : (

        <button onClick={loginWithRedirect}>Login</button>)
    }

  </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1rem;
  margin-bottom: 2rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 300px;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  ${'' /* button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  } */}
  
  button {
	box-shadow:inset 3px 35px 1px -23px #e67a73;
	background-color:#e4685d;
	border-radius:18px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:16px;
	padding:6px 18px;
	text-decoration:none;
	text-shadow:0px 2px 2px #b23e35;
&:hover {
	background-color:#eb675e;
}
&:active {
	position:relative;
	top:1px;
}
  }
`;

export default Navbar;
