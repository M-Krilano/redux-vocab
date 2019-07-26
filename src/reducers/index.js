import { combineReducers } from "redux";
import SelectionReducer from "./SelectionReducer";
import TermReducer from "./TermReducer";

export default combineReducers({
  terms: TermReducer,
  selectedTermId: SelectionReducer
});
