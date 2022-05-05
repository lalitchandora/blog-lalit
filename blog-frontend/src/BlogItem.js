import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => { 
    let blog = props.blogData;
    let title;
    if (blog.id){
        let toLink = "/" + blog.id;
        title = <Link to={toLink}><h1>{blog.blogTitle}</h1></Link>;
    } else {
        <h1>{blog.blogTitle}</h1>
    }
    console.log(title, blog.id);
    return (
        <div key={blog.ObjectID}>
            {title}
            
            <h5>By {blog.bloggerName} </h5>
            <p>{blog.blogText}</p>
        </div>
    );
}

export default Item;
