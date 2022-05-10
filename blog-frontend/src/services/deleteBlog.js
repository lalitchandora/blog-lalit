const axios = require('axios').default;

const deleteBlog = (id) => {
    return axios.delete('http://localhost:8000/delete/'+id)
    .then(res => {
        return res;
    })
}

export default deleteBlog;