import React from 'react';
import { Link } from 'react-router-dom';
import deleteBlog from '../services/deleteBlog';

const Item = (props) => { 

    function deleteBlogHandler(){
        deleteBlog(props.blogData.id)
        .then(res => {
            if (res.success) {
                props.refresh();
            }
        })
    }

    return (
        <div className="card mt-4 mx-4 d-flex flex-row">
            
            <div className="card-body">
                <h5 className="card-title">{props.blogData.blogTitle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By {props.blogData.bloggerName}</h6>
                <p className="card-text">{props.blogData.blogText}</p>
            </div>
            <div className='m-3'>
                <button style={{border:'none', backgroundColor:'white'}}>
                    <Link to={'/edit/'+props.blogData.id} state={{blogData: props.blogData}}>
                        <span className="material-symbols-outlined">edit</span>
                    </Link>
                </button>
                <button onClick={deleteBlogHandler} style={{border:'none', backgroundColor:'white'}}>
                    <span className="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    );
}

export default Item;
