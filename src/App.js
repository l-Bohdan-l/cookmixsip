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
          path: "your-recipes/add",
          element: <AddRecipe />,
        },
      ],
    },

    // {
    //   path: "/movie-gallery",
    //   element: <SharedLayout />,
    //   children: [
    //     {
    //       element: <TrendingMovies />,
    //       index: true,
    //     },
    //     {
    //       path: "movies",
    //       element: <MovieSearch />,
    //     },
    //     {
    //       path: "movies/:movieId",
    //       // loader: () => import("./pages/MovieDetailPage"),
    //       element: <MovieDetailPage />,
    //       children: [
    //         {
    //           path: "cast",
    //           // loader: () => import("./pages/Cast"),
    //           element: <Cast />,
    //         },
    //         {
    //           path: "reviews",
    //           // loader: () => import("./pages/Reviews"),
    //           element: <Reviews />,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   path: "/phonebook",
    //   element: <SharedLayout />,
    //   children: [
    //     {
    //       // loader: () => import("./pages/Home"),
    //       element: <PublicRoute component={Home} />,
    //       index: true,
    //     },
    //     {
    //       path: "contacts",
    //       // loader: () => import("./pages/Movies"),
    //       element: (
    //         <PrivateRoute
    //           component={ContactPage}
    //           redirectTo="/phonebook/login"
    //         />
    //       ),
    //     },
    //     {
    //       path: "login",
    //       element: (
    //         <PublicRoute
    //           restricted
    //           component={LoginPage}
    //           redirectTo="/phonebook/contacts"
    //         />
    //       ),
    //     },
    //     {
    //       path: "register",
    //       element: (
    //         <PublicRoute
    //           restricted
    //           component={Registration}
    //           redirectTo="/phonebook$ npm install gh-pages --save-dev/contacts"
    //         />
    //       ),
    //     },
    //   ],
    // },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: "/cookmixsip" }
);

function App() {
  // const { token } = useAuth();
  // const { data } = useGetCurrentUserQuery(undefined, { skip: !token });
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (data) {
  //     dispatch(setRefetchedCredentials(data));
  //     return;
  //   }
  //   return;
  // }, [data, dispatch]);

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </>
  );
}

export default App;
