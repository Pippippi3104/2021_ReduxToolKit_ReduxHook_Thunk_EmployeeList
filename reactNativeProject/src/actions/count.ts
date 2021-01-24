/* Actions 作成 */
/* 
  Action オブジェクトを返す関数 ( Action Creators ) を作成します。 
*/

import { COUNTER_CHANGE } from "../constants";

const changeCount = (count: number) => {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}

export default changeCount;
