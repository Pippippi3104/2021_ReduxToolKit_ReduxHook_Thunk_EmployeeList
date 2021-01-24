/* Redux Store を React Native アプリ ( Root ) へパスする */
/* 
  実装：configureStore store
  <Provider store={sore}> ... </Provider>

  「方法 #1」の Step 7 で Store にパス済！
  CounterRTKwithSliceConnect コンポーネントを表示させます。
*/

import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { Divider, Colors } from "react-native-paper";
import CounterBasic from "./src/components/CounterBasic";
import CounterRTKwithSliceConnect from "./src/modules/CounterRTKwithSliceConnect";
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
          <CounterRTKwithSliceConnect />
          <MyDivider />
        </View>
      </Provider>
    </SafeAreaView>
  );
}

