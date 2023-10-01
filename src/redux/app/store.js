import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from '../features/job/jobSlice';

const store = configureStore({
    reducer: {
        jobs: jobsReducer
    }
});

export default store;