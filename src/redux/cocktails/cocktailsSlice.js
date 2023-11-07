import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1/",
  }),
  tagTypes: ["Cocktails"],
  endpoints: (builder) => ({
    searchCocktails: builder.query({
      query: (cocktailName) => ({
        url: `search.php?s=${cocktailName}`,
      }),
      invalidatesTags: ["Cocktails"],
    }),
    searchCocktailById: builder.query({
      query: (cocktailId) => ({
        url: `lookup.php?i=${cocktailId}`,
      }),
      invalidatesTags: ["Cocktails"],
    }),
    getRandomCocktail: builder.query({
      query: () => ({
        url: `random.php`,
      }),
    }),
  }),
});
// });

export const {
  useSearchCocktailsQuery,
  useSearchCocktailByIdQuery,
  useGetRandomCocktailQuery,
} = cocktailApi;
