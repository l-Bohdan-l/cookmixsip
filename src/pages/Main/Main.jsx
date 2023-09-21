import Facts from "../../components/Facts/Facts";
import Hero from "../../components/Hero/Hero";
import Random from "../../components/Random/Random";
import { LinkStyled, List, Section, Title } from "./Main.styled";

export default function Main() {
  return (
    <Section>
      <Hero />
      <Random />
      <Facts />
    </Section>
  );
}
