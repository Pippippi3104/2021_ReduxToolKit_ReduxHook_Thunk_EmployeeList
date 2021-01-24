## Flow
* 01:init
* 02:make Actions and Reducer
* 03:make Redux Store
* 04:React Native connects Redux Store
  * createSlice
  * mapStateToProps mapDispatchToProps connect()
* 05:Redux Store pass to React Native App
  * configureStore
    ```
    <Provider store={sore}> ... </Provider>
    ```
* 06:Test App

## Point
* Redux Toolkit ( 旧 redux-starter-kit ) を導入して「方法 #1」から Constants作成 を行わず、＋ Actions と Reducer 関数 を一つにまとめることで一層シンプルさがアップします。
