const get = () => fetch('/todo').then(r => r.json());

const add = message => fetch('/todo', {
    method: 'POST',
    body: message
}).then(r => r.json());

const toggle = index => fetch(`/todo/toggle/${index}`, {
    method: 'PUT'
}).then(r => r.json());

const deleteItem = index => fetch(`/todo/${index}`, {
    method: 'DELETE'
}).then(r => r.json());


export default {
    get,
    add,
    toggle,
    delete:deleteItem
}