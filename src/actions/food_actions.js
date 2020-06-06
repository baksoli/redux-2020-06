import {FETCH_FOOD_DETAIL} from "./types";
import axios from 'axios';

/*
    export const fetchFoodDetail=cno=>dispatch=>{
    }

    (state)=>state.foods.cate_info
    람다식과 기본식 (같은 의미 다른 표현)
    function(state){
        return state.foods.cate_info
     }
 */

export function fetchFoodDetail(no){
    return function (dispatch){
        // dispatch => 함수를 매개변수로 받아 가져온다.
            axios.get('http://localhost:3355/food_detail',{
                params:{
                    no:no
                }
            }).then((result)=>dispatch({
                type:FETCH_FOOD_DETAIL,
                payload:result.data
            }))
    }
}