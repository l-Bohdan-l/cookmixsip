import axios from "axios";

const API_KEY = "1";

export const fetchRandomCocktail = async () => {
  axios.defaults.baseURL = "https://www.thecocktaildb.com/api/json/v1/";
  // www.thecocktaildb.com / api / json / v1 / 1 / random.php;
  const url = `${API_KEY}/random.php`;
  const response = await axios.get(url);
  return response;
};
