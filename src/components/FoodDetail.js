import React,{useEffect} from "react";
import {fetchFoodDetail} from "../actions/food_actions";
import {useDispatch,useSelector} from "react-redux";

export default function FoodDetail(props) {
    const dispatch = useDispatch();
    /*
        const initialState={
            category:[],
            cate_food:[],
            food_detail:{},
            cate_info:{}
        }

        store 에 저장된 모양
        this.state={
            foods:{
                category:[],
                cate_food:[],
                food_detail:{},
                cate_info:{}
           }
        }
     */
    const {match}=props
    useEffect(()=>{
        // dispatch를 fetchFoodDetail(props.match.params.no)로 써라!
        // dispatch에 감싸서 넘겨주어야 포인터가 넘어간다.**
        dispatch(fetchFoodDetail(match.params.no));
        // function(dispatch)=> reducer 연결
    },[])
    /*\
        useSelector(function(state){
            state 의 매개변수를 보내고
            return 으로 state.foods.food_detail 을 받아온다.
            return state.foods.food_detail;
        })
     */
    const food_data=useSelector((state)=>state.foods.food_detail)
    const image2=String(food_data.image)
    const image=image2.split("^");
    const html=image.map((m)=>
        <td>
            <img src={m} width={"200"} height={"200"}/>
        </td>
    )
    return (
        <div className={"row"}>
            <table className={"table"}>
                <tr>
                    {html}
                </tr>
                <tr>
                    <td className={"text-center"} colSpan={"4"}>
                        {food_data.title}
                    </td>
                </tr>
                <tr>
                    <td width={"10%"}>주소</td>
                    <td colSpan={"3"}>{food_data.address}</td>
                </tr>
                <tr>
                    <td width={"10%"}>전화</td>
                    <td colSpan={"3"}>{food_data.tel}</td>
                </tr>
                <tr>
                    <td width={"10%"}>음식종류</td>
                    <td colSpan={"3"}>{food_data.type}</td>
                </tr>
                <tr>
                    <td width={"10%"}>가격</td>
                    <td colSpan={"3"}>{food_data.price}</td>
                </tr>
            </table>
        </div>
    )
}