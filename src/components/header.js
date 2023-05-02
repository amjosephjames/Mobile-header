import React, { useState } from "react";
import styled from "styled-components";
import pix from "../components/logo.svg";
import { GoThreeBars } from "react-icons/go";
import { GiCancel } from "react-icons/gi";
import Sidebar from "./sidebar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleSwitch = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo src={pix} />
          <Navigator>
            <Span>Home</Span>
            <Span>About</Span>
            <Span>Contact</Span>
            <Span>Blog</Span>
            <Span>Help</Span>
            <Spaned>Sign In</Spaned>
            <Button>Sign Up</Button>
          </Navigator>
          <SideIcon onClick={toggleSwitch}>
            {toggle ? (
              <GiCancel fontSize="25px" color="white" />
            ) : (
              <GoThreeBars fontSize="25px" color="white" />
            )}
          </SideIcon>
        </Wrapper>
      </Container>
      <SideTogg>{toggle ? <Sidebar /> : null}</SideTogg>
    </>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 400px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
`;
const Logo = styled.img`
  width: 180px;
  height: 35px;
`;
const Navigator = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
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
const SideIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SideTogg = styled.div``;
