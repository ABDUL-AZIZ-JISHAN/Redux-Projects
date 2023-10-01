import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getPosts from "./postsAPI";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: false
}

export const fetchPost = createAsyncThunk("posts/fetchPosts", async ()=>{
    const posts = await getPosts();
    return posts;
});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchPost.pending, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = true;
            state.posts = [];
        })
        .addCase(fetchPost.fulfilled, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(fetchPost.rejected, (state, action) =>{
            state.isError = true;
            state.error = action.payload?.error;
            state.isLoading = false;
            state.posts = [];
        })
    }
});

export default postsSlice.reducer;