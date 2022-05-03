import React from 'react';
import Item from './BlogItem';

const BlogList = (props) => {
    console.log(props.blogList);
  return (
    <div>
      {props.blogList.map(blog => {
          return <Item blogData={blog}/>
      })}
    </div>
  );
}

export default BlogList;
