/* React Native アプリを Redux Store へコネクトする */
/* 
  実装：クラスコンポーネント
  * mapStateToProps mapDispatchToProps bindActionCreators connect
 
  connect() 関数を使用して CounterBasic クラスコンポーネントをRedux Store へ繋ぎます。
  ここで、Action を実行する関数 ( decrementCount()、 incrementCount()) を作成し、ボタンをタップするたびに State 直に反映させます。
  * React Native アプリ = CounterBasic
*/

import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import changeCount from "../actions/count";

interface CounterProps {
  count: number;
}
interface DispatchProps {
  actions: {
    changeCount: Function
  };
}
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CounterBasic extends Component<Props> {
  render() {
    const { count } = this.props;
    return (
      <View>
        <Button title="+ CounterBasic" onPress={this.incrementCount} />
        <Text style={{ textAlign: "center" }}>Count: {count}</Text>
        <Button title="- CounterBasic" onPress={this.decrementCount} />
      </View>
    );
  }
  decrementCount = () => {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
    return;
  }
  incrementCount = () => {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }
}
const mapStateToProps = (state: { count: { count: number } }): CounterProps => {
  return {
    count: state.count.count,
  }
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    actions: bindActionCreators({changeCount}, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterBasic);
