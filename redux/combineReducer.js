export function combineReducer(reducers) {

    const reducersKey = Object.keys(reducers)

    return (state = {}, action) => {
        const newState = {}
        reducersKey.forEach(key => {
            let reducer = reducers[key]
            newState[key] = reducer(state[key], action)
        })
        return newState
    }
}
