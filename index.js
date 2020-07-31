import { creteStore, conbineReducers } from "./redux";
import ageReducer from "./reducer/ageReducer";
import nameReducer from "./reducer/nameReducer";


const reducer = conbineReducers({
    age: ageReducer,
    name: nameReducer
})
const store = creteStore(reducer)
console.dir(store.getState());
store.subcribe((e) => { console.log('state is change ,now is', store.getState()) })
setTimeout(() => {
    store.dispatch({ type: 'SET_NAME', data: 'lisi' })
}, 2000);


