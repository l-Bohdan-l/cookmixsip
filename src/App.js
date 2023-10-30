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

import { PublicRoute } from "./components/Routes/PublicRoute";
import { PrivateRoute } from "./components/Routes/PrivateRoute";

import { persistor } from "./redux/store";
import Cocktails from "./pages/Cocktails/Cocktails";
import Recipes from "./pages/Recipes/Recipes";
import CocktailDetails from "./components/Cocktails/CocktailDetails/CocktailDetails";
import RecipeDetails from "./components/Recipes/RecipeDetails/RecipeDetails";
import YourRecipes from "./pages/YourRecipes/YourRecipesPage";
import YourRecipesPage from "./pages/YourRecipes/YourRecipesPage";
import AddRecipe from "./components/Recipes/AddRecipe/AddRecipe";
import { LoginPage } from "./pages/Login/LoginPage.jsx";
import { RegisterPage } from "./pages/Register/RegisterPage.jsx";
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
          element: <PublicRoute component={Main} />,
        },
        {
          path: "cocktails",
          element: <PublicRoute component={Cocktails} />,
        },
        {
          path: "cocktails/:cocktailId",
          element: <PublicRoute component={CocktailDetails} />,
        },
        {
          path: "meals",
          element: <PublicRoute component={Recipes} />,
        },
        {
          path: "meals/:mealId",
          element: <PublicRoute component={RecipeDetails} />,
        },
        {
          path: "login",
          element: (
            <PublicRoute restricted component={LoginPage} redirectTo="/" />
          ),
        },
        {
          path: "register",
          element: (
            <PublicRoute restricted component={RegisterPage} redirectTo="/" />
          ),
        },
        {
          path: "your-recipes",
          element: (
            <PrivateRoute component={YourRecipesPage} redirectTo="/login" />
            // <YourRecipesPage />
          ),
        },
        {
          path: "your-recipes/:recipeId",
          element: (
            <PrivateRoute component={RecipeDetails} redirectTo="/login" />
          ),
        },
        {
          path: "your-recipes/add",
          element: <PrivateRoute component={AddRecipe} redirectTo="/login" />,
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
