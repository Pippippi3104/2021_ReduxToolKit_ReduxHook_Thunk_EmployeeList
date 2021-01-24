/* Redux Store 作成 */
/* 
  RTK の configureStore を利用します
*/

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/countReducer";
import countsReducer from "../../modules/countsSlice";

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer
});
const store = configureStore({
  reducer: rootReducer
});
export default store;


