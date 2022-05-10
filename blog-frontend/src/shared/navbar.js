import React from "react";

import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className='navbar-brand' to="/">
                    All Blogs
                </Link>
                <Link className='navbar-brand' to="/create">
                    <button className="btn btn-outline-info">Create New Blog</button>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;