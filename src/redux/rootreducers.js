import { combineReducers } from "redux";
import bookingReducer from "./booking/bookingReducer";

const rootReducers = combineReducers({
    bookFlightReducer : bookingReducer
});

export default rootReducers;