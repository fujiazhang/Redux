
export const loggerMiddleware = store => next => action => {
    console.log('comeing loggerMiddleware')
    next(action)
}
