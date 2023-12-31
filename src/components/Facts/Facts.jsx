import cocktailsmall from "../../images/facts/cocktail-small.jpg";
import cocktailmedium from "../../images/facts/cocktail-medium.jpg";
import kitchensmall from "../../images/facts/kitchen-small.jpg";
import kitchenmedium from "../../images/facts/kitchen-medium.jpg";
import {
  FactWrapper,
  FactsDiv,
  Img,
  Section,
  Text,
  TextWrapper,
  Title,
} from "./Facts.styled";

const Facts = () => {
  return (
    <Section>
      <Title>Taste of History</Title>
      <FactsDiv>
        <FactWrapper>
          <picture>
            <source media="(min-width: 1280px)" srcSet={cocktailmedium} />
            <Img src={cocktailsmall} alt="man giving cocktail" />
          </picture>
          <TextWrapper>
            <Text>
              The word "cocktail" has a rich historical origin. It is believed
              to have emerged in the early 19th century and was initially used
              to describe a mixed drink containing spirits, sugar, water, and
              bitters. The term's first appearance in print dates back to 1806
              in a New York newspaper called "The Balance and Columbian
              Repository." The editor defined a cocktail as "a stimulating
              liquor composed of spirits of any kind, sugar, water, and
              bitters." This definition laid the foundation for the diverse
              world of cocktails that we enjoy today, with countless variations
              and creative concoctions.
            </Text>
          </TextWrapper>
        </FactWrapper>
        <FactWrapper>
          <picture>
            <source media="(min-width: 1280px)" srcSet={kitchenmedium} />
            <Img src={kitchensmall} alt="man giving cocktail" />
          </picture>
          <TextWrapper>
            <Text>
              The history of culinary arts is a fascinating journey that traces
              back to ancient civilizations and has evolved into the diverse and
              innovative culinary landscape we know today. From the earliest
              cooking methods of fire and preservation techniques to the
              emergence of sophisticated cuisines in royal courts, the story of
              culinary evolution is a testament to human creativity and cultural
              exchange. Exploring the historical roots of ingredients, cooking
              techniques, and the birth of iconic dishes provides a deeper
              appreciation for the artistry and traditions that have shaped the
              way we enjoy food around the world.
            </Text>
          </TextWrapper>
        </FactWrapper>
      </FactsDiv>
    </Section>
  );
};

export default Facts;
