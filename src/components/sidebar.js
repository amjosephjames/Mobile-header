import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Span>Home</Span>
        <Span>About</Span>
        <Span>Contact</Span>
        <Span>Blog</Span>
        <Span>Help</Span>
        <Spaned>Sign In</Spaned>
        <Button>Sign Up</Button>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 100%;
  height: 89vh;
  /* background: rgba(255, 255, 255, 0.5); */
  backdrop-filter: blur(10px);
  display: none;
  justify-content: center;
  position: fixed;

  font-family: montserrat;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.div`
  font-size: 13px;
  color: white;
`;
const Spaned = styled.div`
  font-size: 13px;
  text-decoration: none;
  color: white;
`;
const Button = styled.div`
  width: 150px;
  text-decoration: none;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  font-size: 13px;
  color: white;
  border-radius: 15px;
  background: inherit;
`;
