import { createStore, combineReducer } from "./redux";
import { no1Reducer } from "./reducer/no1";
import { no2Reducer } from "./reducer/no2";

import { asyncHanlde } from "./middleWares/asyncHanlde";
import { logger } from "./middleWares/logger";
import { timesmap } from "./middleWares/timesmap";

const reducer = combineReducer({
	no1: no1Reducer,
	no2: no2Reducer
})
const store = createStore(reducer)

const next = store.dispatch

const time = timesmap(store)
const asyncH = asyncHanlde(store)
const log = logger(store)

store.dispatch = time(asyncH(log((next))))


store.subscribe(() => { console.log('state is changed:', store.getStore()) })
store.dispatch({
	type: 'CHANGE_NO_1',
	data: 'zhangsan'
})
store.dispatch({
	type: 'CHANGE_NO_2',
	data: 'lisi'
})

