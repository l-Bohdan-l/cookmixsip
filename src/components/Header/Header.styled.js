import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: relative;
  /* flex-direction: column; */
`;

export const Wrapper = styled.div`
  padding: 20px 15px;
  width: 100%;
  margin: 0 auto;
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
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #fffdfa;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
export const CompanyName = styled.p`
  font-family: "Titan One", cursive, sans-serif;
  font-size: 24px;
  line-height: 1.2;
  color: #fffdfa;
  text-align: center;
  text-shadow: rgb(255 136 136) 3px 2px 5px;
`;

export const CompanyNameSpan = styled.span`
  color: #ff723e;
  text-shadow: rgb(252 253 252) 3px 2px 5px;
`;

export const NavList = styled.nav`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
