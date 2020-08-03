export const timemapMiddleware = store => next => action => {
    console.log('comeing timemapMiddleware')
    console.log(new Date())
    console.log(store.getState())
    next(action)
}
