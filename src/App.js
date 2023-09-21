import "./App.css";
// import { useState, useEffect, lazy } from "react";
// import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
// import { nanoid } from "nanoid";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Error } from "./components/Error";
import Main from "./pages/Main/Main";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";

// import { PublicRoute } from "./components/Contacts/PublicRoute";
// import { PrivateRoute } from "./components/Contacts/PrivateRoute";

import { persistor } from "./redux/store";
import Cocktails from "./pages/Cocktails/Cocktails";
import Recipes from "./pages/Recipes/Recipes";
import CocktailDetails from "./components/Cocktails/CocktailDetails/CocktailDetails";
import RecipeDetails from "./components/Recipes/RecipeDetails/RecipeDetails";
import YourRecipes from "./pages/YourRecipes/YourRecipesPage";
import YourRecipesPage from "./pages/YourRecipes/YourRecipesPage";
import AddRecipe from "./components/Recipes/AddRecipe/AddRecipe";
// import { useAuth } from "./redux/hooks/useAuth";
// import {
//   setRefetchedCredentials,
//   useGetCurrentUserQuery,
// } from "./redux/authSlice";
// import CurrencyConverter from "./components/Currency/CurrencyConverter";
// const Home = lazy(() => import("./pages/Home"));

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <SharedLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "cocktails",
          element: <Cocktails />,
        },
        {
          path: "cocktails/:cocktailId",
          element: <CocktailDetails />,
        },
        {
          path: "meals",
          element: <Recipes />,
        },
        {
          path: "meals/:mealId",
          element: <RecipeDetails />,
        },
        {
          path: "your-recipes",
          element: <YourRecipesPage />,
        },
        {
          path: "your-recipes/:recipeId",
          element: <RecipeDetails />,
        },
        {
          path: "your-recipes/add",
          element: <AddRecipe />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: "/cookmixsip" }
);

function App() {
  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </>
  );
}

export default App;
