import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEM } from "../actions/types";

export default combineReducers({
  item: itemReducer
});
