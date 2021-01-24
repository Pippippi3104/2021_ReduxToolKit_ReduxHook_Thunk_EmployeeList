## Flow
* 01:init
* 02:make Actions and Reducer
* 03:make Redux Store
* 04:React Native connects Redux Store
  * useSelector 
  * useDispatch 
  * createSlice
* 05:add Thunk as Middleware into Redux Store
* 06:make async functional component
* 07:Redux Store pass to React Native App
  * configureStore
    ```
    <Provider store={sore}> ... </Provider>
    ```
* 08:Test App

## Point
* Redux Thunk のような Middleware の必要性は Redux 固有の動作方法から生まれます。
  * Action オブジェクト は Store の唯一の情報源です。
  * Action Creator は Action オブジェクトだけを返します。
  * Reducer は Action オブジェクトを同期処理として Store に Dispatch します。
* この場合、特定のアクションを数秒後に実行させたり、ネットワークリクエストなどのSide Effects には、普通の Action Creators ではできません。
* これらを可能にするには、Dispatch される Action と Reducer に到達する Action の間に Middleware を配置することです。
* Redux Thunk は、Action オブジェクト の代わりに関数を返す Action Creators を呼び出すことで特定のアクションを遅延させたり、ネットワークリクエストを Store に Dispatch することができます。( パラメーターとして Store メソッドの dispatch と getState を受け取ります。)
* それでは、RTK にデフォルトで含まれている redux-thunk を利用して非同期処理を行います。
