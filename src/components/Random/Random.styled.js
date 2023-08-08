import styled from "styled-components";

export const StyledRandom = styled.section`
  margin-top: 230px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MainTitle = styled.h2`
  color: #e2e2e2;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
  text-align: center;
  margin-bottom: 10px;
`;

export const MainSubTitle = styled.p`
  color: #e2e2e2;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.928px;
  text-align: center;
  margin-bottom: 15px;
`;

export const CocktailName = styled.h3`
  color: #e2e2e2;
  text-shadow: 0px 0px 5px #000000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: 0.072px;
  margin-bottom: 5px;
`;

export const RandomItemDescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(183 91 0 / 45%);
  padding: 10px;
  transition: all 0.3s ease-in-out;
  transform: translateX(150%);
  box-shadow: 0px 0px 5px #000000;
`;

export const RandomItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 280px;
  height: 280px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: ${(props) => (props.second ? "0px" : "20px")};
  &:hover ${RandomItemDescriptionWrapper} {
    transform: translateX(0);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const AlcoholIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  padding: 5px 0;
  text-shadow: 0px 0px 5px #000000;
`;

export const AlcoholIconText = styled.p`
  color: #e2e2e2;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
  text-align: center;
`;
