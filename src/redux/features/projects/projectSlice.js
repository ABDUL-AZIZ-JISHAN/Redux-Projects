import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    filteredProjects : []
}

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        addToFilter :(state, action) =>{
            state.filteredProjects = [...state.filteredProjects, action.payload]
        },
        removeFromFilter :(state, action) =>{
            state.filteredProjects =  state.filteredProjects.filter(item => item !== action.payload)
        }
    }
})

export default projectsSlice.reducer;

export const {addToFilter, removeFromFilter} = projectsSlice.actions;