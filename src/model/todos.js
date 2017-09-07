let list = []

const get = () => Object.freeze([...list]);

const add = value => {
    list.push({
        value,
        checked: false
    });
    return get();
};

const markAsDone = index => {
    list[index].checked = !list[index].checked
    return get();
}

const deleteItem = index => {
    list.splice(index, 1)
    return get();
}

export default {
    get,
    add,
    markAsDone,
    deleteItem
};