import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const CreateBlogForm = (props) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    let navigate = useNavigate();

    async function usehandleSubmit(event){
        event.preventDefault();
        console.log(title, text);
        let blog = {
            bloggerName: "Lalit Chandora",
            blogTitle: title,
            blogText: text
        };
        props.getNewBlog(blog);
        setTitle('');
        setText('');
        
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={usehandleSubmit}>
                <input type="text" placeholder='Enter Title' value={title} onChange={event => setTitle(event.target.value)}/>
                <br></br>
                <textarea cols="20" rows="5" placeholder='Enter Text' value={text} onChange={event => setText(event.target.value)}></textarea>
                <input type="submit" value="Create Blog"></input>
            </form>
        </div>
    );
}

export default CreateBlogForm;
