import React from "react";
import { useLocation, useParams } from "react-router-dom";

import UpdateBlogForm from "../components/EditBlog";
import { useNavigate } from "react-router-dom";
import updateBlog from "../services/editBlog";

const Edit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.blogId, 10);
    const {blogData} = useLocation().state;
    function updateBlogHandler(user, title, text){
        updateBlog(id, user, title, text)
        .then(res => {
            if (res.status) {
                navigate('/');
            }
        });        
    }
    return (
        <UpdateBlogForm updateBlogFunc={updateBlogHandler} blogData={blogData}/>
    )
};

export default Edit;