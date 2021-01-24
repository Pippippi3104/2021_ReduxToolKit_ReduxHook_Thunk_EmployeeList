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
import { bindActionCreators } from "redux";
import * as countActions from "../actions/counts";

class CounterBasic extends Component {
  decrementCount() {
    let { count, actions } = this.props;
    count--;
    actions.changeCount(count);
  }
  incrementCount() {
    let { count, actions } = this.props;
    count++;
    actions.changeCount(count);
  }
  render() {
    const { count } = this.props;
    return (
      <View>
        <Button title="+ CounterBasic" onPress={() => this.incrementCount()} />
        <Text style={{ textAlign: "center" }}>Count: {count}</Text>
        <Button title="- CounterBasic" onPress={() => this.decrementCount()} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  count: state.count.count
});
const ActionCreators = Object.assign({}, countActions);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterBasic);
