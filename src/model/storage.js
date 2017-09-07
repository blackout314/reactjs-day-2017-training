const KEY = 'STATE'

const get = () => new Promise(resolve => {
    const savedState = window.localStorage.getItem(KEY)
    const state = savedState ? JSON.parse(savedState) : undefined;
    resolve(state)
});

const set = (state) => new Promise(resolve => {
    window.localStorage.setItem(KEY, JSON.stringify(state));
    resolve(state)
});

export default {
    get,
    set
};