import React, { useState } from 'react';    
const CreateBlogForm = (props) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [user, setUser] = useState('');

    async function usehandleSubmit(event){
        event.preventDefault();
        console.log(title, text);
        props.addBlogFunc(user, title, text);
        setTitle('');
        setText('');
        setUser('');
    }
    
    return (
        <div className="m-5" style={{width: '70rem'}}>
            <form onSubmit={usehandleSubmit}>
            <div className="mb-3">
                <label for="titleUser" className="form-label">User</label>
                <input type="text" className="form-control" id="titleUser" value={user} onChange={event => setUser(event.target.value)}/>
            </div>
                <div className="mb-3">
                    <label for="titleInput" className="form-label">Title</label>
                    <input type="text" className="form-control" id="titleInput" value={title} onChange={event => setTitle(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label for="textInput" className="form-label">Text</label>
                    <textarea className="form-control" id="textInput" rows="3" value={text} onChange={event => setText(event.target.value)}></textarea>
                </div>
                <div className='d-flex flex-row-reverse'>
                    <input className="btn btn-primary" type="submit" value="Create Blog"></input>
                </div>
            </form>
        </div>
    );
}

export default CreateBlogForm;
