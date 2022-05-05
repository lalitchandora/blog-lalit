import React from "react";
import Item from "./BlogItem";

import { useParams } from "react-router-dom";

const SingleBlogItem = (props) => {
    let id = parseInt(useParams().blogId, 10)-1;
    let blog = props.blogList[id];
    return <Item blogData = {blog}/>
};

export default SingleBlogItem;