import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (geyDefaultMiddleware) =>
    geyDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
