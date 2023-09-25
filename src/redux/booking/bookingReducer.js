import { BOOK, DELETEFLIGHT } from "./actionTypes";

const initialState = [];

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      if (state.length < 3) {
        return [...state, action.payload];
      } else {
        return state;
      }
      case DELETEFLIGHT: 
      const filteredState =  state.filter(item => item !== action.payload);
      return filteredState;
    default:
      return state;
  }
};

export default bookingReducer;
