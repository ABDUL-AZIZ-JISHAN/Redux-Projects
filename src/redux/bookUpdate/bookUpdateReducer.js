import { CHANGEDFORMUPDATE, CLEARFORMSTATE } from "./actionTypes";

const mockData = {
  imgUrl: "",
  price: "",
  rating: "",
  author: "",
  name: "",
  isFeatured: true,
  isActive: false,
};
const initialState = mockData;

const bookUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGEDFORMUPDATE:
      return { ...action.payload, isActive: true };
    case CLEARFORMSTATE:
      return mockData;
    default:
      return state;
  }
};
export default bookUpdateReducer;
