import React,{useEffect} from "react";
import {FETCH_CATEGORY} from "../actions/types";
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios';
import {NavLink} from "react-router-dom";

/*
useDispatch : 전송할 목적
useSelector : 데이터를 가져오기 위한 목적

    View => dispatch => export default function(state=initialState,action)
                        ==> state ==> store ==> subscribe
    dispatch({
        type:.
        payload:
    })
    데이터를 액션 함수에 넘겨준다.
 */
export default function Category(props) {
    const dispatch=useDispatch(); // reducer 함수를 호출
    useEffect(()=>{
        axios.get('http://localhost:3355/category').then((result)=>{
            dispatch({
                type:FETCH_CATEGORY,
                payload:result.data
            })
        })
    },[])
    // deps :: 실행할 때 한번만 실행
    // useEffect 는 두가지 기능을 가지고 있다.
    // componentDidMount, componentDidUpdate

    // state가 갱신 ==> store에서 변경된 state를 읽어 온다.
    /*
        이벤트 발생 ========================> reducer ================> state갱신 ============> store에 저장 =============> 갱신된 state를 읽어와 화면에 출력
        dispatch({                                                                                                          └ re-render()
                type:FETCH_CATEGORY,
                payload:result.data
            })
     */
    // 갱신된 데이터 읽기
    const category_data=useSelector((state)=>state.foods.category)
    // render
    const html=category_data.map((m)=>
        <div className="col-md-4">
            <div className="thumbnail">
                <NavLink to={"/cate_food/"+m.cateno}>
                    <img src={m.poster} alt="Lights" style={{"width": "100%"}}/>
                </NavLink>
                <div className="caption">
                    <p>{m.title}</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className={"row"}>
            {html}
        </div>
    )
}