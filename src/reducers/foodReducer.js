// actions 에서 변수를 가져와 값을 변경하는 역할
// 바뀐 값을 store에 저장한다.

// initialState에서 변수 지정후 action에 값 저장

// actions -> reducers -> store => components 순
import {FETCH_CATEGORY,FETCH_CATE_FOOD,FETCH_FOOD_DETAIL,FETCH_CATE_INFO} from "../actions/types";

const initialState={
    category:[],
    cate_food:[],
    food_detail:{},
    cate_info:{}
}

/*
    action 보내기
    dispatch({
        type:FETCH_CATEGORY,
        payLoad:data(category)
    })
    
    var a=[1,2,3]
    var b=[...a] -> b=[1,2,3]
 */
export default function(state=initialState,action)
{
    switch (action.type) {
        case FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case FETCH_CATE_FOOD:
            return {
                ...state,
                cate_food: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_CATE_INFO:
            return {
                ...state,
                cate_info: action.payload
            }
        default:
            return state

    }
}