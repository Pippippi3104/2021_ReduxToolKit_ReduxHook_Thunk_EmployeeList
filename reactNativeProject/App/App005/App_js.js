/* Redux Store を React Native アプリ ( Root ) へパスする */
/*  
  実装：configureStore store
  <Provider store={sore}> ... </Provider>

  CounterRTKwithSliceReactHook コンポーネントを表示させます。
*/

import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { Divider, Colors } from "react-native-paper";
import CounterBasic from "./src/components/CounterBasic";
import CounterRTKwithSliceConnect from "./src/modules/CounterRTKwithSliceConnect";
import CounterRTKwithSliceReactHook from "./src/modules/CounterRTKwithSliceReactHook";
import CounterRTKwithSliceReduxHooks from "./src/modules/CounterRTKwithSliceReduxHooks";
import RTKwithSliceReduxHooksThunkAsync from "./src/modules/RTKwithSliceReduxHooksThunkAsync";
import store from "./src/store";
const MyDivider = () => <Divider style={{ backgroundColor: Colors.red900 }} />;

export default function() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Provider store={store}>
        <View>
          <MyDivider />
          <CounterBasic />
          <MyDivider />
          <CounterRTKwithSliceReactHook />
          <MyDivider />
          <CounterRTKwithSliceConnect />
          <Text style={styles.text}>↑↓</Text>
          <CounterRTKwithSliceReduxHooks />
          <Text style={styles.text}>
            if ↓ click, it will be applied after 1 sec.
          </Text>
          <RTKwithSliceReduxHooksThunkAsync />
          <MyDivider />
        </View>
      </Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 10,
    color: Colors.pink100
  }
});

