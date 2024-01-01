import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../usefetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog , isLoading: isLoading} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleCLick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }
    
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading....</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleCLick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;