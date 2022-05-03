import React from 'react';

const Item = (props) => { 
    let blog = props.blogData;
    return (
        <div key={blog.ObjectID}>
            <h1>{blog.blogTitle}</h1>
            <h5>By {blog.bloggerName} </h5>
            <p>{blog.blogText}</p>
        </div>
    );
}

export default Item;
