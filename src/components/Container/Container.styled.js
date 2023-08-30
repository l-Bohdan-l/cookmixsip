import styled from "styled-components";

export const ContainerStyled = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  font-family: "Roboto";
  flex: 1;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  /* @media screen and (min-width: 768px) {
    width: 768px;
  } */
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
