import styled from "styled-components";
import heroMobileImg from "../../images/hero/hero-mobile.jpg";
import heroMedium from "../../images/hero/hero-medium.jpg";
export const HeroImg = styled.img``;

export const Section = styled.section`
  /* position: relative; */
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 195px;
  position: absolute;
  left: 0;
  overflow: hidden;
  object-fit: cover;
  background-image: url(${heroMobileImg});
  background-position: bottom;

  @media screen and (min-width: 320px) {
    height: 224px;
  }

  @media screen and (min-width: 768px) {
    position: relative;
  }
  @media screen and (min-width: 1280px) {
    height: 500px;
    background-image: url(${heroMedium});
  }
`;

export const MainTitle = styled.h1`
  color: #e2e2e2;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 0.28px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: rgb(0 0 0 / 36%) 0px 4px 4px;

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: 0.48px;
  }
`;
