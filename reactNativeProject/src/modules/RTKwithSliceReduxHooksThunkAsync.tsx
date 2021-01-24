/* 非同期処理をする関数コンポーネントを作成する */
/*  
  非同期 Dispatch を実行する関数を返すAction Creatorを作成 ( 書き方の詳細 ) して React Native アプリを Redux Store へコネクトします。
*/

import React from "react";
import { View, Button, Text } from "react-native";
import { increment, decrement } from "./countsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppThunk, RootState } from "../store/005";

const incrementAsync = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};
const decrementAsync = (): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(decrement());
  }, 1000);
};

export default function RTKwithSliceReduxHooksThunkAsync() {
  const counts = useSelector((state: RootState) => state.counts);
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="+ RTKwithSliceReduxHooksThunkAsync"
        onPress={() => dispatch(incrementAsync())}
      />
      <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
      <Button
        title="- RTKwithSliceReduxHooksThunkAsync"
        onPress={() => dispatch(decrementAsync())}
      />
    </View>
  );
}


