import { creteStore, conbineReducers } from "./redux";
import ageReducer from "./reducer/ageReducer";
import nameReducer from "./reducer/nameReducer";


const reducer = conbineReducers({
    age: ageReducer,
    name: nameReducer
})
const store = creteStore(reducer)

const next = store.dispatch;

const loggerMiddleware = (action) => {
    console.log('state:', store.getState())
    console.log('action:', action)
    next(action)
    console.log('state change:', store.getState())
}

const exceptMiddleware = (action) => {
    try {
        loggerMiddleware(action)
    } catch (error) {
        console.log(error)
    }
}

store.dispatch = exceptMiddleware

store.dispatch({ type: 'SET_NAME', data: 'lisi' })
