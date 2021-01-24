/* Redux Store 作成する */
/*  
  作成した pageReducer を Store に追加します。
*/

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import countReducer from "../reducers/countReducer";
import countsReducer from "../modules/countsSlice";
import pageReducer from "../modules/pageListsSlice";

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer,
  pageList: pageReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});

export default store;


