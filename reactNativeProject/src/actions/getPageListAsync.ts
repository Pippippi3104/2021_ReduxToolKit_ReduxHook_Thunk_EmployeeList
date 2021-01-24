/* 非同期で従業員リストを取得するActionを作成する */
/*  
  axios を利用します。yarn add axios を実行してインストールしたあと、下記のファイルを作成します。

  ※axios や fetch で 普通に API データを取得するには、
  例えば、App.js に useEffect を利用する関数コンポーネントを作成してデータを取得したりします。

  一方、Thunk を利用する際は少し書き方が変わります。
  非同期 Dispatch を実行する関数を返すAction Creatorを作成 ( 書き方の詳細 ) します。
*/

import axios, { AxiosResponse } from "axios";
import { getPageList } from "../modules/pageListsSlice";
import { AppThunk } from "../store/006";

export const getPageListAsync = (): AppThunk => async dispatch => {
  try {
    await axios.get<any, AxiosResponse<any>>("http://dummy.restapiexample.com/api/v1/employees").then(res => {
      dispatch(getPageList(res.data));
    });
  } catch (err) {
    console.error(err);
  }
};
