import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import postReducer from '../features/post/postSlice';
import relatedPostReducer from '../features/relatedPosts/relatedPostSlice';
const store = configureStore({
    reducer: {
        blogs: postsReducer,
        blog: postReducer, 
        relatedPosts: relatedPostReducer
    }
});

export default store;