/* Actions 作成 */
/* 
  Action オブジェクトを返す関数 ( Action Creators ) を作成します。 
*/

import { COUNTER_CHANGE } from "../constants";

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count
  };
}