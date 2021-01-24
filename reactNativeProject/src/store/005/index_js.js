/* Redux Store に Middlewareとして thunkを追加する */
/*  
  既存のファイルに
  import thunk from "redux-thunk";
  middleware: [thunk]　
  を追加します。
*/

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import countReducer from "../reducers/countReducer";
import countsReducer from "../modules/countsSlice";

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});
export default store;


