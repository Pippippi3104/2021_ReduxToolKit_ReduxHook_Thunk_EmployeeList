/* Redux Store を React Native アプリ ( Root ) へパスする */
/*  
  実装：configureStore
  <Provider store={sore}> ... </Provider>

  先ほどの CounterBasic クラスコンポーネントを表示させながら、react-redux の Provider を使用して Root アプリを Redux Store へ繋ぎます。
*/

import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { Divider, Colors } from "react-native-paper";
import CounterBasic from "../../src/components/CounterBasic";
import configureStore from "../../src/store/001/index";

const store = configureStore();
/* const MyDivider: React.FC = () => <Divider style={{ backgroundColor: Colors.red900 }} />; */
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
          {/* <MyDivider /> */}
          <CounterBasic />
          {/* <MyDivider /> */}
        </View>
      </Provider>
    </SafeAreaView>
  );
}