import { NavLink } from "react-router-dom";
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
    justify-content: space-between;
    padding: 25px 15px;
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
  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const CompanyNameSpan = styled.span`
  color: #ff723e;
  text-shadow: rgb(252 253 252) 3px 2px 5px;
`;

export const NavList = styled.nav`
  @media screen and (max-width: 1279px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 50px;
`;

export const NavItem = styled(NavLink)`
  font-size: 18px;
  color: #fffdfa;
  font-family: "Roboto" sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: #ff723e;
  }
  &.active {
    color: #ff723e;
  }
`;

export const LangWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  /* width: 199px; */
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;

export const FlagImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const LangText = styled.p`
  font-size: 18px;
  color: #fffdfa;
  font-family: "Roboto" sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.18px;
  text-transform: uppercase;
`;

export const LogoutBtn = styled.button`
  border: 1px solid transparent;
  border-radius: 25px;
  background-color: #ff723e;
  color: #fff;
  font-size: 17px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: #fff;
    color: #ff723e;
    border: 1px solid #ff723e;
    /* margin-left: 13px; */
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

export const UserName = styled.p`
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  pointer-events: none;
`;

export const UserEmail = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  pointer-events: none;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
