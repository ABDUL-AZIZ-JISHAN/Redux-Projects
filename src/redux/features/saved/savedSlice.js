import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getBlog from "./postAPI";

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

const saveSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchBlog.pending, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = true;
            state.post = [];
        })
        .addCase(fetchBlog.fulfilled, (state, action) =>{
            state.isError = false;
            state.error = false;
            state.isLoading = false;
            state.post = action.payload;
        })
        .addCase(fetchBlog.rejected, (state, action) =>{
            state.isError = true;
            state.error = action.payload?.error;
            state.isLoading = false;
            state.post = [];
        })
    }
});

export default saveSlice.reducer;
