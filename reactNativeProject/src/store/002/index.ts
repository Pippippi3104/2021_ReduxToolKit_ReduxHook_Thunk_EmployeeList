/* Redux Store 作成 */
/* 
  RTK の configureStore を利用します
*/

import { Action, combineReducers } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import countReducer from "../../reducers/countReducer";
import countsReducer from "../../modules/countsSlice";

const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer
});
const store = configureStore({
  reducer: rootReducer
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


