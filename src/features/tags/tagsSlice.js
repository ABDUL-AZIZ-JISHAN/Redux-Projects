import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import getTags from "./tagsAPI";

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: false,
}

export const fetchTags = createAsyncThunk("tags/fetchTags", async ()=>{
   const tags = await getTags();
   return tags;
})

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) =>{
        builder
        .addCase(fetchTags.pending, (state, action)=>{
           state.isLoading = true;
           state.error = false;
           state.isError = false;
           state.tags = [];
        })
        .addCase(fetchTags.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload.error;
            state.isError = true;
            state.tags = [];
         })
         .addCase(fetchTags.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.error = false;
            state.isError = false;
            state.tags = action.payload;
         })
    }
});

export default tagsSlice.reducer;