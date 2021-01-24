## Flow
* 01:init
* 02:make Actions and Reducer
* 03:make Redux Store
* 04:React Native connects Redux Store
  * createSlice 
  * useReducer
* 05:Redux Store pass to React Native App
  * configureStore
    ```
    <Provider store={sore}> ... </Provider>
    ```
* 06:Test App

## Point
* useReducer() は Redux Store へ登録されている特定の State 直を取得し dispatch する方法を提供してくれます。
