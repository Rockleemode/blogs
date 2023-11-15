import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blogs, isPending, error} = useFetch(` http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () =>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:"Delete"
        })
        .then(() => navigate("/") )
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading....</div>}
            {error && <h2>{error}</h2>}
            {blogs && <div>
                <h2 style={{color:"grey"}}>{blogs.title}</h2>
                <div>{blogs.body}</div>
                <p style={{fontStyle:"italic", fontWeight:800}}>written by sir {blogs.author}</p>
                <button onClick={handleDelete}>delete</button>
            </div>
            }
        </div>
     );
}
 
export default BlogDetails;