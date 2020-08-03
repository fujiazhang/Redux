
export const exceptMiddleware = store => next => action => {
    try {
        console.log('comeing exceptMiddleware')
        console.log(next)
        next(action)
    } catch (error) {
        console.log(error)
    }
}
