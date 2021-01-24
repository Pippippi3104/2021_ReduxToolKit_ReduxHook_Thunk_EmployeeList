## Flow
* 01:init
* 02:make Actions and Reducer
* 03:make Redux Store
* 04:React Native connects Redux Store
  * useSelector 
  * useDispatch 
  * createSlice
* 05:add Thunk as Middleware into Redux Store
* 06:make Slice Reducer
* 07:make Redux Store
* 08:make async Action getting Employee List
* 09:React Native connects Redux Store
  * useSelector 
  * useDispatch 
  * createSlice
  * Redux Thunk
* 10:Redux Store pass to React Native App
  * configureStore
    ```
    <Provider store={sore}> ... </Provider>
    ```
* 11:Test App

## Point
* 「方法 #5」の応用方法として、特定のサイトに ネットワークリクエストして従業員の情報を表示してみます。
* 「方法 #5」のStep 1「Redux Store に Middlewareとして thunkを追加する」を設定した状態で進めます。