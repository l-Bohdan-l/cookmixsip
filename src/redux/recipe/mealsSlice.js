import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealApi = createApi({
  reducerPath: "mealApi",
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
  tagTypes: ["Meal"],
  endpoints: (builder) => ({
    getRandomRecipe: builder.query({
      query: () => ({
        url: `random.php`,
      }),
      invalidatesTags: ["Meal"],
    }),
    searchRecipeByName: builder.query({
      query: (name) => ({
        url: `search.php?s=${name}`,
      }),
      invalidatesTags: ["Meal"],
    }),
    getRecipeById: builder.query({
      query: (id) => ({
        url: `lookup.php?i=${id}`,
      }),
      invalidatesTags: ["Meal"],
    }),
  }),
});
// });

export const {
  useGetRandomRecipeQuery,
  useSearchRecipeByNameQuery,
  useGetRecipeByIdQuery,
} = mealApi;
