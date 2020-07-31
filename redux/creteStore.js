export default function creteStore(reducer, initState) {
    let state = initState || {}
    const listeners = []

    function getState() {
        return state
    }

    function dispatch(action) {
        // state = newState
        state = reducer(state, action)
        listeners.forEach(f => { f() })
    }

    function subcribe(f) {
        listeners.push(f)
    }

    dispatch({ type: '' })

    return {
        getState,
        dispatch,
        subcribe
    }
}
