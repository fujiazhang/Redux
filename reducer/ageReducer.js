let initState = {
    age: 1
}

export default function reducer(state, action) {
    if (!state) {
        state = initState
    }
    switch (action.type) {
        case 'SET_AGE':
            return {
                ...state,
                age: action.data
            }
            break;
        default:
            return state
            break;
    }
}
