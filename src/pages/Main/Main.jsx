import Facts from "../../components/Facts/Facts";
import Hero from "../../components/Hero/Hero";
import Random from "../../components/Random/Random";
import { LinkStyled, List, Section, Title } from "./Main.styled";

export default function Main() {
  return (
    <Section>
      {/* <List>
        <LinkStyled to="/currency-converter">Currency Converter</LinkStyled>
        <LinkStyled to="/movie-gallery">Movies</LinkStyled>
        <LinkStyled to="/phonebook">Phone book</LinkStyled>
      </List> */}
      <Hero />
      <Random />
      <Facts />
    </Section>
  );
}
