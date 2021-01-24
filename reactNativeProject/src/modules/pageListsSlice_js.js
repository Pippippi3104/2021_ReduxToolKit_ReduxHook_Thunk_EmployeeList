/* Slice Reducer 関数を作成する */

import { createSlice } from "@reduxjs/toolkit";
const pageListsSlice = createSlice({
  name: "PageLists",
  initialState: { pageList: [] },
  reducers: {
    getPageList: (state, action) => {
      action.payload.data.map(list => {
        state.pageList.push(list);
      });
    }
  }
});
export const { getPageList } = pageListsSlice.actions;
export default pageListsSlice.reducer;



