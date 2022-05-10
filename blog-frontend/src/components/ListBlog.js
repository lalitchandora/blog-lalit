import {Link} from 'react-router-dom';

import React from 'react';
import Item from './BlogItem';

const BlogList = (props) => {
  
  return (
    <div>
      {props.blogList.map((blog, index) => {
          return <Item blogData={blog} refresh={props.refresh}/>
      })}
    </div>
  );
}

export default BlogList;
