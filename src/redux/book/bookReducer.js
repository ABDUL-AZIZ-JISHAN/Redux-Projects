import { LOADBOOKS } from "./actionTypes";

const initialState = [];

const bookReducer = (state = initialState, action) =>{
    switch (action.type) { 
        case LOADBOOKS:
            return action.payload;
        default:
            return state;
    }
}

export default bookReducer;