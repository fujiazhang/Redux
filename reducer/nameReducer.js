let initState = {
    name: 'zhangsan'
}

export default function reducer(state, action) {
    if (!state) {
        state = initState
    }
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.data
            }
            break;
        default:
            return state
            break;
    }
}
