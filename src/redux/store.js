import {
  // combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
// import { filterSlice } from "./contacts/filterSlice";
// import { contactsApi } from "./contacts/contactsApi";
// import { authApi } from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "./authSlice";
import { cocktailApi } from "./cocktails/cocktailsSlice";
import { mealApi } from "./recipe/mealsSlice";

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
import { recipeApi } from "./recipe/recipeSlice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
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
    // contactsApi.middleware,
    // authApi.middleware,
    cocktailApi.middleware,
    mealApi.middleware,
    recipeApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
