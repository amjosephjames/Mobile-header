import React from "react";
import styled from "styled-components";
import Header from "../components/header";
// import { Link } from "react-router-dom";

const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Hold>
          <Texthold>
            <Holdings>
              <H1>Maximise your money</H1>
              <H2>with Vaults</H2>
            </Holdings>
            <P>
              Put money aside effortlessly for the things you want with vaults
            </P>
            <Mid>
              <Left>
                <Up>
                  <Numb>+234</Numb>
                  <Sign>+</Sign>
                </Up>
                <Line></Line>
              </Left>
              <Right>
                <Phonenumber>Phonenumber</Phonenumber>
                <Lined></Lined>
              </Right>
              <Button>Get Started</Button>
            </Mid>
            <Down>Download our app rated by 1m+ people</Down>
          </Texthold>
          <Image></Image>
        </Hold>
      </Wrapper>
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #020c1b;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 900px) {
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 400px) {
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 320px) {
    height: 100vh;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
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
  @media (max-width: 425px) {
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
const Hold = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 50px; */
  }
  @media (max-width: 900px) {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 50px; */
  }
  @media (max-width: 425px) {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 50px; */
  }
  @media (max-width: 400px) {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 50px; */
  }
  @media (max-width: 320px) {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 50px; */
  }

  @media (max-width: 360px) {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: 50px; */
  }
`;
const Texthold = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    /* width: 650px; */
  }
`;

const Holdings = styled.div`
  /* width: 500px; */
  height: 90px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;
const H2 = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;
const P = styled.div`
  color: white;
  font-size: 12px;
`;
const Mid = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Left = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 400px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const Up = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;
const Numb = styled.div`
  color: white;
  font-size: 12px;
`;
const Sign = styled.div`
  color: white;
  font-size: 12px;
`;
const Right = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    /* margin-left: 15px; */
  }
  @media (max-width: 400px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const Phonenumber = styled.div`
  color: white;
  font-size: 12px;
`;
const Lined = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
`;
const Button = styled.div`
  text-decoration: none;
  background-color: white;
  font-size: 13px;
  width: 150px;
  /* text-decoration: none; */
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #020c1b;
  border-radius: 10px;

  @media (max-width: 768px) {
    /* margin-left: 15px; */
  }
`;
const Down = styled.div`
  color: white;
  font-size: 12px;
`;
const Image = styled.div`
  height: 450px;
  width: 450px;
  background-image: url("wallimg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 90px;
  margin-top: 82px;
  @media (max-width: 1024px) {
    height: 370px;
    width: 400px;
    margin-right: 1px;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 400px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
