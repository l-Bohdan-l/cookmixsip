// import { useState, useEffect } from "react";

// import heroMobileImg from "../../images/hero/hero-mobile.jpg";
// import heroMedium from "../../images/hero/hero-medium.jpg";
import { ImgWrapper, MainTitle, Section } from "./Hero.styled";
// import { fetchRandomCocktail } from "../../services/fetchCoctails";

const Hero = () => {
  return (
    <Section>
      <ImgWrapper>
        {/* <picture>
          <source media="(min-width: 1280px)" srcSet={heroMedium} />
          <HeroImg src={heroMobileImg} alt="cooking process" />
        </picture> */}
        <MainTitle>Find your favorite recipes</MainTitle>
      </ImgWrapper>
    </Section>
  );
};
export default Hero;
