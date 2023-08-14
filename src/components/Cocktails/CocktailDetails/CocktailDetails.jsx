import { useParams } from "react-router-dom";
import { useSearchCocktailByIdQuery } from "../../../redux/cocktails/cocktailsSlice";
import { useEffect, useState } from "react";

const CocktailDetails = () => {
  const [cocktailData, setCocktailData] = useState(null);
  const { cocktailId } = useParams();
  const { data: cocktail } = useSearchCocktailByIdQuery(cocktailId, {
    skip: !cocktailId,
  });
  console.log("cocktail", cocktail);
  useEffect(() => {
    if (!cocktail) {
      setCocktailData([]);
      return;
    }
    setCocktailData(cocktail.drinks[0]);
  }, [cocktail]);

  return (
    <div>
      <h2>{cocktailData.strDrink}</h2>
      <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
      <p>{cocktailData.strInstructions}</p>
      <ul>
        <li>{cocktailData.strIngredient1}</li>
      </ul>
    </div>
  );
};

export default CocktailDetails;
