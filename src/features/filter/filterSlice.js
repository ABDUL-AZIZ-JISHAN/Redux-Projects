
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags : [],
    search : ''
};

const filterSlice = createSlice({
    name: "relatedVideos",
    initialState,
     reducers: {
        addTags: (state, action) =>{
            state.tags.push(action.payload);
        },
        removeTags: (state, action) =>{
            const indexOf = state.tags.indexOf(action.payload);

            if(indexOf !== -1){
                state.tags.splice(indexOf, 1);
            }
        },
        searched : (state, action) =>{
            state.search = action.payload;
        }
     }
});

export default filterSlice.reducer;
export const {addTags, removeTags, searched} = filterSlice.actions;
