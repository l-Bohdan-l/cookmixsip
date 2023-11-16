import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { persistor } from "./redux/store";
import { authStateChangeUser } from "./redux/auth/authOperations";

import Main from "./pages/Main/Main";
import Cocktails from "./pages/Cocktails/Cocktails";
import Recipes from "./pages/Recipes/Recipes";
import YourRecipesPage from "./pages/YourRecipes/YourRecipesPage";
import { LoginPage } from "./pages/Login/LoginPage.jsx";
import { RegisterPage } from "./pages/Register/RegisterPage.jsx";

import { Error } from "./components/Error";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { PublicRoute } from "./components/Routes/PublicRoute";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import CocktailDetails from "./components/Cocktails/CocktailDetails/CocktailDetails";
import RecipeDetails from "./components/Recipes/RecipeDetails/RecipeDetails";
import AddRecipe from "./components/Recipes/AddRecipe/AddRecipe";
import { EditRecipe } from "./pages/Edit/EditRecipe.jsx";

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
          errorElement: <Error />,
        },
        {
          path: "cocktails/:cocktailId",
          element: <PublicRoute component={CocktailDetails} />,
          errorElement: <Error />,
        },
        {
          path: "meals",
          element: <PublicRoute component={Recipes} />,
          errorElement: <Error />,
        },
        {
          path: "meals/:mealId",
          element: <PublicRoute component={RecipeDetails} />,
          errorElement: <Error />,
        },
        {
          path: "login",
          element: (
            <PublicRoute restricted component={LoginPage} redirectTo="/" />
          ),
          errorElement: <Error />,
        },
        {
          path: "register",
          element: (
            <PublicRoute restricted component={RegisterPage} redirectTo="/" />
          ),
          errorElement: <Error />,
        },
        {
          path: "your-recipes",
          element: (
            <PrivateRoute component={YourRecipesPage} redirectTo="/login" />
          ),
          errorElement: <Error />,
        },
        {
          path: "your-recipes/:recipeId",
          element: (
            <PrivateRoute component={RecipeDetails} redirectTo="/login" />
          ),
          errorElement: <Error />,
        },
        {
          path: "your-recipes/:recipeId/edit",
          element: <PrivateRoute component={EditRecipe} redirectTo="/login" />,
          errorElement: <Error />,
        },
        {
          path: "your-recipes/add",
          element: <PrivateRoute component={AddRecipe} redirectTo="/login" />,
          errorElement: <Error />,
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [dispatch]);

  return (
    <>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </>
  );
}

export default App;
