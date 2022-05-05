import {Link} from 'react-router-dom';

import React from 'react';
import Item from './BlogItem';

const BlogList = (props) => {
  return (
    <div>
      <Link to="/create">
        <button>
          Create New Blog
        </button>
      </Link>
      {props.blogList.map((blog, index) => {
          blog.id = index+1;
          return <Item blogData={blog}/>
      })}
    </div>
  );
}

export default BlogList;
