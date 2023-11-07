import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64df62ca71c3335b258288cf.mockapi.io/api/v1/",
  }),
  tagTypes: ["Recipes"],
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => ({
        url: `recipes`,
      }),
      invalidatesTags: ["Recipes"],
    }),
    addRecipe: builder.mutation({
      query: (body) => ({
        url: `recipes`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Recipes"],
    }),
    getYourRecipeByid: builder.query({
      query: (id) => ({
        url: `recipes/${id}`,
      }),
      invalidatesTags: ["Recipes"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useAddRecipeMutation,
  useGetYourRecipeByidQuery,
} = recipeApi;
