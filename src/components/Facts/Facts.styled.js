import styled from "styled-components";

export const Section = styled.section`
  padding-top: 30px;

  @media screen and (min-width: 1280px) {
    padding-top: 60px;
  }
`;

export const FactWrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column;
  align-items: center; */
  width: 100%;
  /* height: 300px; */
  background-color: #0b0f15;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  border: 1px solid #000;
  margin-bottom: 20px;

  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const FactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h2`
  color: rgb(226, 226, 226);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.928px;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (min-width: 1280px) {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.232px;
    text-align: center;
  }
`;

export const Img = styled.img`
  height: 170px;
  border-radius: 10px 0 10px 0;
  float: left;
  margin-right: 10px;

  @media screen and (min-width: 1280px) {
    height: 280px;
  }
`;

export const TextWrapper = styled.div`
  padding: 10px;
  text-align: left;
`;

export const Text = styled.p`
  color: #e2e2e2;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.14px;

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
  }
`;
