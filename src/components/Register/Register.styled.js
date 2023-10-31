import { Field, Form } from "formik";
import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  /* margin-top: 40px; */
  letter-spacing: 4px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;

  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;

export const FormStyled = styled(Form)`
  background-color: #2033654a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  gap: 15px;
  border: 1px solid #ff723e;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(255, 114, 62, 0.75);
  @media screen and (min-width: 1280px) {
    width: 500px;
    padding: 20px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff723e;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  @media screen and (min-width: 1280px) {
    font-size: 25px;
  }
`;

export const InputStyled = styled(Field)`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;
  border: 1px solid #ff723e;
  background-color: transparent;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
  @media (min-width: 1280px) {
    width: 400px;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
