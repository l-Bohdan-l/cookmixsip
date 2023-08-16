import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
    //     prepareHeaders: (headers, { getState }) => {
    //       const token = getState().credentials.token;
    //       if (token) {
    //         headers.set("authorization", `Bearer ${token}`);
    //       }

    //       return headers;
    //     },
  }),
  tagTypes: ["Recipe"],
  endpoints: (builder) => ({
    getRandomRecipe: builder.query({
      query: () => ({
        url: `random.php`,
      }),
      invalidatesTags: ["Recipe"],
    }),
    searchRecipeByName: builder.query({
      query: (name) => ({
        url: `search.php?s=${name}`,
      }),
    }),
  }),
});
// });

export const { useGetRandomRecipeQuery, useSearchRecipeByNameQuery } =
  recipeApi;
