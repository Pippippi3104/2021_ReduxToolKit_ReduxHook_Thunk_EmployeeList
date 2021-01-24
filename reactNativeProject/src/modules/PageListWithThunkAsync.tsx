/* React Native アプリを Redux Store へコネクトする */
/*  
  実装：関数コンポーネント
  useSelector useDispatch createSlice Redux Thunk
*/

import React from "react";
import { View, Button, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getPageListAsync } from "../actions/getPageListAsync";
import { RootState } from "../store/006";

export default function PageListWithThunkAsync() {
  const pageLists = useSelector((state: RootState) => state.pageList.pageList);
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        disabled={pageLists.length ? true : false}
        title="Get Employee"
        onPress={() => dispatch(getPageListAsync())}
      />
      {pageLists.length ? (
        pageLists.map((employee: { 
          employee_name: React.ReactNode; 
          employee_age: React.ReactNode; }, i: string | number | null | undefined) => (
          <Text key={i}>
            {employee.employee_name} / {employee.employee_age}
          </Text>
        ))
      ) : (
        <Text style={{ textAlign: "center" }}>Click ↑↑↑</Text>
      )}
    </View>
  );
}