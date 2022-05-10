const axios = require('axios').default;

const updateBlog = (id, userName, title, note) => {
    return axios.post('http://localhost:8000/edit', {
        id: id,
        userName: userName,
        title: title,
        note: note
    })
    .then(res => {
        return res;
    })
}

export default updateBlog;