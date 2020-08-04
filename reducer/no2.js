const initSate = {
    no2: '',
}
export function no2Reducer(state, action) {
    if (!state) {
        state = initSate
    }
    switch (action.type) {
        case 'CHANGE_NO_2':
            return {
                ...state,
                no2: action.data
            }
        default:
            return state
    }
}
