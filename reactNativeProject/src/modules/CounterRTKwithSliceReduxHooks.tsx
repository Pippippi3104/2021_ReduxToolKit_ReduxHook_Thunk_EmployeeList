/* React Native アプリを Redux Store へコネクトする */
/*  
  実装：関数コンポーネント
  useSelector useDispatch createSlice
*/

import React from "react";
import { View, Button, Text } from "react-native";
import { increment, decrement } from "./countsSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/002";

export default function CounterRTKwithSliceReduxHooks() {
  const counts = useSelector((state: RootState) => state.counts);
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        title="+ RTKwithSliceReduxHooks"
        onPress={() => dispatch(increment())}
      />
      <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
      <Button
        title="- RTKwithSliceReduxHooks"
        onPress={() => dispatch(decrement())}
      />
    </View>
  );
}

