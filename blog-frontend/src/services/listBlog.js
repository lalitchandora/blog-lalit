const axios = require('axios').default;

const getAllBlogs = () => {
    return axios.get('http://localhost:8000/')
    .then(res => {
        return formatBlogData(res.data);
    })
}

function formatBlogData(blogArr){
    if (blogArr.length > 0){
        return blogArr.map(item => {
            return {
                id: item.id,
                blogTitle: item.title,
                blogText: item.note,
                bloggerName: item.userName
            };
        })
    } else {
        return [];
    }
    
}

export default getAllBlogs;