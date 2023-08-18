import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64df62ca71c3335b258288cf.mockapi.io/api/v1/",
    //     prepareHeaders: (headers, { getState }) => {
    //       const token = getState().credentials.token;
    //       if (token) {
    //         headers.set("authorization", `Bearer ${token}`);
    //       }

    //       return headers;
    //     },
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
  }),
});
// });

export const { useGetRecipesQuery } = recipeApi;
