/* Actions ＆ Reducer 関数作成 */
/* 
  Constants 作成 は不要です！
  Reducer 関数を作成する際、Switch 文 は不要です。
  RTK の createSlice を使用します。
*/

import { createSlice } from "@reduxjs/toolkit";

const countsSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
});

export const { increment, decrement } = countsSlice.actions;
export default countsSlice.reducer;

