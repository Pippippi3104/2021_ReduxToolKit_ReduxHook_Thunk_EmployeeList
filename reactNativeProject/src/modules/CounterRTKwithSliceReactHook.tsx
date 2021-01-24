/* React Native アプリを Redux Store へコネクトする */
/*  
  実装：関数コンポーネント
  createSlice useReducer
*/

import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";
import reducer, { increment, decrement } from "./countsSlice";

const initialState: number = 0;

export default function CounterRTKwithSliceReactHook() {
  const [counts, dispatch] = useReducer(reducer, initialState);
  
  return (
    <View>
      <Button
        title="+ RTKwithSliceReactHook"
        onPress={() => dispatch(increment)}
      />
      <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
      <Button
        title="- RTKwithSliceReactHook"
        onPress={() => dispatch(decrement)}
      />
    </View>
  );
}
