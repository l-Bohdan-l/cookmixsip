import styled from "styled-components";

export const TextAreaStyled = styled.textarea`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  font-size: 17px;
  color: #ff723e;
  border: 1px solid #ff723e;
  background-color: transparent;
  margin-bottom: 5px;
  resize: none;
  height: 100px;
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
