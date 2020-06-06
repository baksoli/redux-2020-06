/*
    JSP(View) => DispatcherServlet => Model
    ========     =================   ======
    React           store           reducer
    function

    reducer 는 여러개가 있지만
    store는 한개로

    dispatch함수를 만들어 store와 연결하여 component에 갱신

 */
import rootReducer from '../reducers'
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {createStore, compose, applyMiddleware} from "redux";
/*
    prev,action,next 이전 ,지금, 다음의 상황을 볼수있는 logger
    미들웨어로 설정되어 있다.
 */

// logger 생성
const logger=createLogger();
// thunk 생성 (비동기 프로그램)
const initialState={}
// 비동기와 로깅 파일을 위함
const middleware=[thunk,logger];

// 저장공간
const store=createStore(
    rootReducer,
    initialState,
    // 미들웨어 전체를 설정 / 옵션상황
    compose(
        applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store