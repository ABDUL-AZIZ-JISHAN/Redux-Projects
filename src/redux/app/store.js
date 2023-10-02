import { configureStore } from "@reduxjs/toolkit";
import { APISlice } from "../features/api/APISlice";

const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});

export default store;
