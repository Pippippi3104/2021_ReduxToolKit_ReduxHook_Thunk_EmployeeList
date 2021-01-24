/* Redux Store を React Native アプリ ( Root ) へパスする */
/*  
  実装：configureStore store
  <Provider store={sore}> ... </Provider>

  CounterRTKwithSliceReactHook コンポーネントを表示させます。
*/

import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { Divider, Colors } from "react-native-paper";
import CounterBasic from "../../src/components/CounterBasic";
import CounterRTKwithSliceConnect from "../../src/modules/CounterRTKwithSliceConnect";
import CounterRTKwithSliceReactHook from "../../src/modules/CounterRTKwithSliceReactHook";
import CounterRTKwithSliceReduxHooks from "../../src/modules/CounterRTKwithSliceReduxHooks";
import store from "../../src/store/002/index";
/* const MyDivider = () => <Divider style={{ backgroundColor: Colors.red900 }} />; */
const MyDivider: React.FC<{}> = () => {
    return <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }} />;};

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
          <Text style={{ textAlign: "center", fontSize: 20 }}>Or</Text>
          <CounterRTKwithSliceReduxHooks />
          <MyDivider />
          <CounterRTKwithSliceReactHook />
          <MyDivider />
        </View>
      </Provider>
    </SafeAreaView>
  );
}

