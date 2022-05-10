import React, { useState } from 'react';
import BlogList from '../components/ListBlog';
import getAllBlogs from '../services/listBlog';

const HomePage = () => {
    const [blog, setBlog] = useState([]);
    
    React.useEffect(() => {
        getAllBlogs()
        .then((data) => {
            setBlog(data);
        }).catch(err => {
            setBlog([]);
            console.log(err);
        });
    })

    return (
        <div className='home-page-container'>
            <BlogList blogList={blog} refresh={getAllBlogs}/>
        </div>
    );
}

export default HomePage;