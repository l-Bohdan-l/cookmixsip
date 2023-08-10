import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #383638;
`;

export const Wrapper = styled.div`
  color: rgb(226, 226, 226);
  padding: 20px 15px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 60px; */

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  /* @media screen and (min-width: 768px) {
    width: 768px;
  } */
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
  /* @media screen and (min-width: 1920px) {
    width: 1920px;
  } */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px;
`;

export const Logo = styled.div`
  margin-bottom: 15px;
  color: rgb(226, 226, 226);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #0b0f15;
`;

export const LogoText = styled.p`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.928px;
  text-align: center;
`;

export const CopyRight = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.928px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 0;
`;
