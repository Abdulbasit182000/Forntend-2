import BlogList from "./BlogList";
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
