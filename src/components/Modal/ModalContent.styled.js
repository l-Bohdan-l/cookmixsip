import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ListItem = styled.li`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #000000;
    text-shadow: 0px 0px 10px #ffffff;
  }
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
  @media screen and (max-width: 1279px) {
    display: block;
    margin: 0 auto;
    margin-top: 5px;
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

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  border-top: 1px solid rgb(255, 255, 255);
  padding-top: 3px;
`;

export const LoginLink = styled(NavLink)`
  &:hover {
    color: #000000;
    text-shadow: 0px 0px 10px #ffffff;
  }
  &:active {
    color: rgb(255, 114, 62);
  }
`;
