import { configureStore } from "@reduxjs/toolkit";
import { APISlice } from "../features/api/APISlice";
import projectReducer from '../features/projects/projectSlice';

const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer,
    projects: projectReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});

export default store;
