import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Newhome = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Blog 1', body: 'Blog 1 body', author: 'ali', id: 1 },
        { title: 'Blog 2', body: 'Blog 2 body', author: 'basit', id: 2 },
        { title: 'Blog 3', body: 'Blog 3 body', author: 'ahmed', id: 3 }
    ]);
    
    const [name, setName] = useState('ali')

    const handleClick = () => {
        let title = document.getElementById('title').value;
        let body = document.getElementById('body').value;
        let text = document.getElementById('author').value;
        let len = blogs.length;
        let lastIndexId = blogs[len - 1].id;

        setBlogs([
            ...blogs,
            { title: title, body: body, author: text, id: lastIndexId + 1 }
        ]);
    }

    const handleName = () => {
        setName('basit')
    }
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('use effect ran')
    },[name]);

    return (
        <div className="newhome">
            <h2>Add Blog</h2>
            <div>
                <button onClick={() => handleName()}>Change Name</button>
                <p>{name}</p>
                <label>
                    Title:
                    <input type="text" name="Title" id="title" />
                    <div></div>
                    Body:
                    <input type="text" name="body" id="body" />
                    <div></div>
                    Author:
                    <input type="text" name='author' id="author" />
                </label>
                <button onClick={handleClick}>Submit</button>
            </div>
            <div></div>
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'ali')} title="Ali's Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}

export default Newhome;
