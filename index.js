import { creteStore, conbineReducers } from "./redux";
import ageReducer from "./reducer/ageReducer";
import nameReducer from "./reducer/nameReducer";


const reducer = conbineReducers({
    age: ageReducer,
    name: nameReducer
})
const store = creteStore(reducer)

const next = store.dispatch;

const loggerMiddleware = next => action => {
    console.log('comeing loggerMiddleware')
    next(action)
}

const exceptMiddleware = next => action => {
    try {
        console.log('comeing exceptMiddleware')
        console.log(next)
        next(action)
    } catch (error) {
        console.log(error)
    }
}

const timemapMiddleware = next => action => {
    console.log('comeing timemapMiddleware')
    console.log(new Date())
    next(action)
}


store.dispatch = timemapMiddleware(exceptMiddleware(loggerMiddleware(next)))
store.dispatch({ type: 'SET_NAME', data: 'lisi' })
console.log(store.getState())
