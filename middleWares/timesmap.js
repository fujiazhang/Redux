
export const timesmap = store => next => action => {
    console.log('timemap:', new Date())
    next(action)
}
