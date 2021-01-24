## Links
* React Native with TS
  * [Using TypeScript with React Native](https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native)
  * [Using TypeScript](https://reactnative.dev/docs/typescript)
* Redux ToolKit
  * [Redux ToolkitでReduxを楽に使う〜React-Native〜](https://www.jacepark.com/how-to-use-redux-easily-with-redux-toolkit-in-react-native/)
  * [TypeScirptを使ってReactとreduxをconnectしようとしたらはまった](https://qiita.com/NeGI1009/items/382b54106a79944652a3)
* Hook
  * React Hook
    * 新規でState作成
  * Redux Hook
    * StoreからState呼び出し
* Redux Thunk
  * [Redux Thunk](https://github.com/reduxjs/redux-thunk#redux-thunk)
  * [Async actions with Redux Thunk middleware in React Native apps](https://enappd.com/blog/async-actions-with-redux-thunk-middleware-in-react-native-apps-1/100/)

## Note
* init React Native (TS)
  ```
  ~~react-native init MyAwesomeProject --template typescript~~
  react-native init MyAwesomeProject --template react-native-template-typescript
  ```

* run ios
  ```
  cd ios
  pod install
  ```
  * "react-native run-ios --simulator=\"iPhone 8\""に書き換えておく
  ```
  npm run-ios
  ```

* Redux
  * install 
    ```
    npm install react-redux
    npm install @types/react-redux
    npm install redux
    npm install react-native-paper
    npm install @reduxjs/toolkit
    ```