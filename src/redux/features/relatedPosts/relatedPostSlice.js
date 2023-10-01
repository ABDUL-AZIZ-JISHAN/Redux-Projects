import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRelatedPosts from "./relatedPostAPI";

const initialState = {
    relatedPosts: [],
    isLoading: false,
    isError: false,
    error: false
}

export const fetchRelatedPost = createAsyncThunk("posts/fetchPosts", async ({id,tags})=>{
    const posts = await getRelatedPosts(id, tags);
    return posts;
});

const relatedPostSlice = createSlice({
    name: "relatedPosts",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchRelatedPost.pending, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = true;
            state.relatedPosts = [];
        })
        .addCase(fetchRelatedPost.fulfilled, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = false;
            state.relatedPosts = action.payload;
        })
        .addCase(fetchRelatedPost.rejected, (state, action) =>{
            state.isError = true;
            state.error = action.payload?.error;
            state.isLoading = false;
            state.relatedPosts = [];
        })
    }
});

export default relatedPostSlice.reducer;