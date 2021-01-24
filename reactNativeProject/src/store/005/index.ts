/* Redux Store に Middlewareとして thunkを追加する */
/*  
  既存のファイルに
  import thunk from "redux-thunk";
  middleware: [thunk]　
  を追加します。
*/

import { Action, combineReducers } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import countReducer from "../../reducers/countReducer";
import countsReducer from "../../modules/countsSlice";

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer
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

