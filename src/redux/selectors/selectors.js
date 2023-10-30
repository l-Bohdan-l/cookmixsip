// export const filterSelector = (state) => state.filter;
// export const selectIsRefreshing = (state) => state.credentials.isRefreshing;
export const selectIsLoggedIn = (state) => state.credentials.isLoggedIn;
export const selectAuthName = (state) => state.credentials.name;
export const selectAuthEmail = (state) => state.credentials.email;
