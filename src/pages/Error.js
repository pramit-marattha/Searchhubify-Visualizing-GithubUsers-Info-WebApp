import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return <Wrapper>
    <div>
      <h2>REEEEEEEE!! </h2>
      <h2> OOpsieee!!!</h2>
      <h1>404</h1>
      <h3>wubba lubba dub dub !! ,the page cannont be found</h3>
      <Link to="/" className="btn">
        Let's go Home
      </Link>
    </div>

  </Wrapper>;
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-20);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h2 {
    font-size: 5rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
