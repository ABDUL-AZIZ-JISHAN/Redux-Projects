import bookReducer from "./book/bookReducer";
import bookUpdateReducer from "./bookUpdate/bookUpdateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    bookReducer,
    bookUpdateReducer
})

export default rootReducer;