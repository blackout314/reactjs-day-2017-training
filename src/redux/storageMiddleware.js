import storage from '../model/storage'

export default store => next => action => {
    let result = next(action)
    storage.set(store.getState())
    return result
}