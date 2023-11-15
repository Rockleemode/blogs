import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSumit = (e) =>{
        e.preventDefault();
        // validation
        if (title == "") {
            setError("Title field can not be empty.");
            return;
        }
        if (body == "") {
            setError("Body field can not be empty.");
            return;
        }
        if (author == '') {
            setError("Author field can not be empty.");
            return;
        }
              
        const blog = {title, body, author};
        fetch("http://localhost:8000/blogs", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(() => {
        setTitle('');
        setBody("");
        setAuthor('');
        setError('');
        navigate("/")
    })
    }

    return ( 
        <div className="blog-form">
            <h2>Add a New Blog!</h2>
            <form onSubmit={handleSumit}>
                <label>Title:</label>
                <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={error.includes("Title") ? "error-border" : ""}
                />
                {error.includes("Title") && <p style={{color:"red"}}>{error}</p>}
                <label>Body:</label>
                <textarea 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className={error.includes("Body") ? "error-border" : ""}
                />
                {error.includes("Body") && <p style={{color:"red"}}>{error}</p>}
                <label>Author:</label>
                <input
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={error.includes("Author") ? "error-border" : ""}
                />
                {error.includes("Author") && <p style={{color:"red"}}>{error}</p>}
                <button>Add</button>
            </form>
        </div>
     );
}
 
export default BlogForm;