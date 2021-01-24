## Flow
* 01:init
* 02:make Actions and Reducer
* 03:make Redux Store
* 04:React Native connects Redux Store
  * useSelector 
  * useDispatch 
  * createSlice
* 05:Redux Store pass to React Native App
  * configureStore
    ```
    <Provider store={sore}> ... </Provider>
    ```
* 06:Test App

## Point
* 今回は React フック ( useReducer ) ではなく react-redux フックの useSelector useDispatch を利用します。
