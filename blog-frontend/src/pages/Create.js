import React from "react";
import CreateBlogForm from "../components/CreateBlog";

import { useNavigate } from "react-router-dom";
import addBlog from "../services/createBlog";

const Create = () => {
    let navigate = useNavigate();

    function postBlog(user, title, text){
        addBlog(user, title, text)
        .then(res => {
            if (res.status) {
                navigate('/');
            }
        });        
    }
    return (
        <CreateBlogForm addBlogFunc={postBlog}/>
    )
};

export default Create;