/* Redux Store 作成する */
/*  
  作成した pageReducer を Store に追加します。
*/

import { Action, combineReducers } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import countReducer from "../../reducers/countReducer";
import countsReducer from "../../modules/countsSlice";
import pageReducer from "../../modules/pageListsSlice";

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer,
  pageList: pageReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

