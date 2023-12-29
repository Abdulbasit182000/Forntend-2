import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { isCompositeComponent } from "react-dom/test-utils";

const Newhome = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setTimeout( () => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data);
            setIsLoading(false);
        });
        },1000);
    },[]);

    return (
        <div className="newhome">
            {isLoading && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Newhome;
