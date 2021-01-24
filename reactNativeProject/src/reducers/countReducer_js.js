/* Reducer 関数作成 */
/* 
  Reducer 関数は現在の state と action を引数として取り「新しい State」を返します。
  Action タイプが COUNTER_CHNAGE の場合、countに aciton.payload をセットして返します。
*/

import { COUNTER_CHANGE } from "../constants";

const initialState = {
  count: 0
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload
      };
    default:
      return state;
  }
};
export default countReducer;