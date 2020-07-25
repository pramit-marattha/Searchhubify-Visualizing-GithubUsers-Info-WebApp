import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Followers from './Followers';
const User = () => {
  return <section className="section">
    <Wrapper className="section-center">
      <Card></Card>
    </Wrapper>

    <Wrapper className="section-center">
    </Wrapper>
    <Wrapper className="section-center">
    </Wrapper>

    <Wrapper className="section-center">
      <Followers></Followers>
    </Wrapper>
  </section>;
};

const Wrapper = styled.div`
  padding-top: 1rem;
  display: grid;
  gap: 7rem 2rem;
  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
