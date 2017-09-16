const get = () => fetch('/todo').then(r => r.json())

export default {
    get
}