
const initSate = {
    no1: '',
}
export function no1Reducer(state, action) {
    if (!state) {
        state = initSate
    }
    switch (action.type) {
        case 'CHANGE_NO_1':
            return {
                ...state,
                no1: action.data
            }
        default:
            return state
    }
}
