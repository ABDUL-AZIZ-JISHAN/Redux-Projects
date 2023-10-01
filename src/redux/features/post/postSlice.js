import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getBlog from "./postAPI";
import toggleSavedAction from "./toggleSavedAPI";
import incrementLikeAction from "./likeAPI";

const initialState = {
    post: [],
    isLoading: false,
    isError: false,
    error: false
}

export const fetchBlog = createAsyncThunk("post/fetchPost", async (id)=>{
    const post = await getBlog(id);
    return post;
});

export const toggleSaved = createAsyncThunk("post/toggleSaved", async (id)=>{
    const post = await toggleSavedAction(id);
    return post;
});

export const incrementLike = createAsyncThunk("post/incrementLike", async(id)=>{
    const post = await incrementLikeAction(id);
    return post;
});
const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase((fetchBlog.pending && toggleSaved.pending), (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = true;
            state.post = [];
        })
        .addCase((fetchBlog.rejected && toggleSaved.rejected && incrementLike.rejected), (state, action) =>{
            state.isError = true;
            state.error = action.payload?.error;
            state.isLoading = false;
            state.post = [];
        })
        .addCase(fetchBlog.fulfilled, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = false;
            state.post = action.payload;
        })
        .addCase(toggleSaved.fulfilled, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = false;
            state.post = action.payload;
        })
    }
});

export default postSlice.reducer;
