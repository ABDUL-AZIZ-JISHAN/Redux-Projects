import { configureStore } from "@reduxjs/toolkit";
import { APISlice } from "../features/api/APISlice";
import userReducer from '../features/users/userSlice'
const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});

export default store;
