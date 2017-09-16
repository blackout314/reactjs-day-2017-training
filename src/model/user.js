const login = (username, password) => fetch('/login', {
    method: 'POST',
    body: password
}).then(res => {
    if(res.status === 200){
        return {
            username
        };
    }
    
    return res.text().then(value => {
        throw new Error(value);
    })
});

export default {
    login
}