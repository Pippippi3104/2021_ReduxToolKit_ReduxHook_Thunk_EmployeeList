/* React Native アプリを Redux Store へコネクトする */
/*  
  実装：クラスコンポーネント
  * createSlice
  * mapStateToProps mapDispatchToProps connect()
*/

import { ActionCreatorWithoutPayload, bindActionCreators } from "@reduxjs/toolkit";
import React, { Component, Dispatch } from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { increment, decrement } from "./countsSlice";

interface CounterProps {
  counts: number;
}
interface DispatchProps {
  increment: ActionCreatorWithoutPayload<string>;
  decrement: ActionCreatorWithoutPayload<string>;
}
type Props = ReturnType<typeof mapStateToProps> & DispatchProps;

class CounterRTKwithSliceConnect extends Component<Props> {
  render() {
    const { counts } = this.props;
    console.log("!@# this.props: ", this.props);
    return (
      <View>
        <Button
          title="+ RTKwithSliceConnect"
          onPress={this.props.increment}
        />
        <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
        <Button
          title="- RTKwithSliceConnect"
          onPress={this.props.decrement}
        />
      </View>
    );
  }
}
const mapStateToProps = (state: { counts: number }): CounterProps => {
  return {
    counts: state.counts
  }
};
const mapDispatchToProps:  DispatchProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterRTKwithSliceConnect);
