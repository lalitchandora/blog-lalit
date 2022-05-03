import React, { useState } from 'react';

const CreateBlogForm = (props) => {
    const [title, setTitle] = React.useState('');
    const [text, setText] = React.useState('');

    function handleSubmit(event){
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
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Title' value={title} onChange={event => setTitle(event.target.value)}/>
                <br></br>
                <textarea cols="20" rows="5" placeholder='Enter Text' value={text} onChange={event => setText(event.target.value)}></textarea>
                <input type="submit" value="Create Blog"></input>
            </form>
        </div>
    );
}

export default CreateBlogForm;
