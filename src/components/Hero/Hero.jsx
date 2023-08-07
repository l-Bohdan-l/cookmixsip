import heroMobileImg from "../../images/hero/hero-mobile.jpg";
import { HeroImg } from "./Hero.styled";

const Hero = () => {
  return (
    <div>
      <HeroImg src={heroMobileImg} alt="cooking process" />
      <h1>Hero</h1>
    </div>
  );
};
export default Hero;
