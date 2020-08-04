export function createStore(reducer, initSate) {
    let state = initSate
    const liesteners = []

    function dispatch(action) {
        state = reducer(state, action)
        liesteners.forEach(f => f())
    }

    function subscribe(f) {
        liesteners.push(f)
    }

    function getStore() {
        return state
    }

    /* 注意！！！用一个不匹配任何计划的 type，来获取初始值 */
    dispatch({ type: '' })

    return {
        getStore,
        dispatch,
        subscribe
    }
}
