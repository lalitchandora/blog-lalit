const axios = require('axios').default;

const addBlog = (userName, title, note) => {
    return axios.post('http://localhost:8000/add', {
        userName: userName,
        title: title,
        note: note
    })
    .then(res => {
        return res;
    })
}

export default addBlog;