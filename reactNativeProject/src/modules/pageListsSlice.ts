/* Slice Reducer 関数を作成する */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageListsSlice = createSlice({
  name: "PageLists",
  initialState: { pageList: [] as any },
  reducers: {
    getPageList: (state, action: PayloadAction<any>) => {
      action.payload.data.map((list: any) => {
        return state.pageList.push(list);
      });
    }
  }
});

export const { getPageList } = pageListsSlice.actions;
export default pageListsSlice.reducer;



