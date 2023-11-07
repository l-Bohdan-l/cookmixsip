import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authSlice } from "./auth/authSlice";
import { cocktailApi } from "./cocktails/cocktailsSlice";
import { mealApi } from "./recipe/mealsSlice";
import { recipeApi } from "./recipe/recipeSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["isLoggedIn"],
};

export const authCredentialsPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [mealApi.reducerPath]: mealApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    credentials: authCredentialsPersistReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    cocktailApi.middleware,
    mealApi.middleware,
    recipeApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
