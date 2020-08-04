export const asyncHanlde = store => next => action => {
    setTimeout(() => {
        next(action)
    }, 1500)
}
