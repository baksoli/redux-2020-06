// reducers를 한번에 다 모아놓기 위한 js
import {combineReducers} from "redux";
import foodReducer from "./foodReducer";

export default combineReducers({
    // reducer가 여러개일 경우 한번에 묶어 store로 넘기기 위함
    // 묶는다 => combineReducers

    // store에서 foods.category 이런식으로 호출
    foods:foodReducer
})