import styled from "styled-components";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const Wrapper = styled.div`
  position: relative;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: #e2e2e2;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 10px;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
    margin-bottom: 15px;
  }
`;

export const GoBackBtn = styled.button`
  display: block;
  position: absolute;
  top: 5px;
  left: 0px;
  margin: 0 auto;
  /* padding: 5px; */
  border-radius: 10px;
  border: none;
  background-color: transparent;

  color: #000;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.051px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  @media screen and (min-width: 1280px) {
    background-color: ${(props) => (props.desktop ? "#e2e2e2" : "transparent")};
    font-size: 20px;
    top: 10px;
    left: 0px;
    padding: 10px 20px;
    &:hover,
    &:focus {
      background-color: ${(props) => (props.desktop ? "#000" : "transparent")};
      color: ${(props) => (props.desktop ? " #e2e2e2" : "transparent")};
    }
  }
`;

export const BtnText = styled.span`
  display: none;
  @media screen and (min-width: 1280px) {
    display: inline-block;
  }
`;

export const BtnIcon = styled(BsFillArrowLeftCircleFill)`
  color: #e2e2e2;
  font-size: 20px;
  &:hover,
  &:focus {
    color: orange;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
