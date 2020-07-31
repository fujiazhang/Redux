export default function conbineReducers(reducers) {
    let nextState = {}
    let reducersKeys = Object.keys(reducers)

    /*返回合并后的新的reducer函数*/
    return (state, action) => {
        /*遍历执行所有的reducers，整合成为一个新的state*/
        reducersKeys.forEach(name => {
            let reducer = reducers[name] //reducer中的一个函数
            nextState[name] = reducer(state[name], action) /*执行 分 reducer，获得新的state*/
        })
        return nextState
    }
}
