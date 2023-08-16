import {
  // combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import // contactsSlice,
// contactsReducer
"./contacts/contactsSlice";
import { filterSlice } from "./contacts/filterSlice";
import { contactsApi } from "./contacts/contactsApi";
import { authApi } from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authSlice } from "./authSlice";
import { cocktailApi } from "./cocktails/cocktailsSlice";
import { recipeApi } from "./recipe/recipeslice";

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

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authCredentialsPersistReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

// const combineReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// })

export const store = configureStore({
  reducer: {
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [contactsApi.reducerPath]: contactsApi.reducer,
    // filter: filterSlice.reducer,
    credentials: authCredentialsPersistReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
    // authApi.middleware,
    cocktailApi.middleware,
    recipeApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
// const rootReducer  = combineReducers({
//   contactsList: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// });

// export const store = configureStore({
//   reducer: contactsPersistReducer,
//   // {
//   //       contactsList: contactsSlice.reducer,
//   //       // contactsList: contactsReducer,
//   //       filter: filterSlice.reducer,
//   //     },
//       middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// })
