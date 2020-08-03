import { creteStore, conbineReducers } from "./redux";
import ageReducer from "./reducer/ageReducer";
import nameReducer from "./reducer/nameReducer";
import { timemapMiddleware } from './middlewares/timemapMiddleware'
import { exceptMiddleware } from './middlewares/exceptMiddleware'
import { loggerMiddleware } from './middlewares/loggerMiddleware'

const reducer = conbineReducers({
    age: ageReducer,
    name: nameReducer
})
const store = creteStore(reducer)

const next = store.dispatch;


const timemap = timemapMiddleware(store)
const except = exceptMiddleware(store)
const logger = loggerMiddleware(store)

store.dispatch = timemap(except(logger(next)))
store.dispatch({ type: 'SET_NAME', data: 'lisi' })
console.log(store.getState())
