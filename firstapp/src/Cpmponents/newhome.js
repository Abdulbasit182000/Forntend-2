import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
import { isCompositeComponent } from "react-dom/test-utils";
import useFetch from "../usefetch";

const Newhome = () => {
    const {data: blogs , isLoading: isLoading} = useFetch('http://localhost:8000/blogs')
    return (
        <div className="newhome">
            {isLoading && <div> Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Newhome;
