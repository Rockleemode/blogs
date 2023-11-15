/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return (  
        <div className="blog-list">
             {blogs.map(blog =>(
                <div className="preview-blogs" key={blog.id}>
                    <Link to={`details/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by sir {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
