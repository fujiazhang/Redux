export const logger = store => next => action => {
    console.log('store before change111111', store.getStore())
    console.log('action:', action)
    next(action)
    console.log('store has changed:2222222', store.getStore())
}
