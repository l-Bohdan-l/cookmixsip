import { useEffect, useState } from "react";
import { fetchRandomCocktail } from "../../services/fetchCoctails";
import { MainTitle, StyledRandom } from "./Random.styled";

const Random = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  //   useEffect(() => {
  //     fetchRandomCocktail().then((res) => setRandomCocktail(res.data.drinks[0]));
  //   }, []);

  console.log(randomCocktail);

  return (
    <StyledRandom>
      <MainTitle>Your random recipes</MainTitle>
    </StyledRandom>
  );
};

export default Random;
