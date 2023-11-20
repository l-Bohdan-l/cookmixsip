import styled from "styled-components";

export const MenuButton = styled.div`
  width: 25px;
  overflow: hidden;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const MenuCheckbox = styled.input`
  display: none;
`;

export const MenuLabel = styled.label`
  position: relative;
  display: block;
  height: 25px;
  cursor: pointer;

  &::before {
    content: "";
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
    position: absolute;
    left: ${(props) => (props.isChecked ? "-39px" : "0")};
    top: 3px;
    width: 100%;
    height: 3px;
    background-color: #fffdfa;
  }

  &::after {
    content: "";
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
    position: absolute;
    left: ${(props) => (props.isChecked ? "39px" : "0")};
    top: 10px;
    width: 100%;
    height: 3px;
    background-color: #fffdfa;
  }
`;

export const MenuTextBar = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fffdfa;
  top: 17px;
  &::before {
    content: "";
    position: absolute;
    top: 5px;
    right: 0;
    left: 0;
    color: #fffdfa;
    font-size: 12px;
    font-weight: bold;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    text-align: center;
  }
`;
