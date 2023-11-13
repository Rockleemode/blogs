import { useState } from "react";

const Home = () => {
    const [blogs] = useState([
        {title:"The Dawn", author:"luffy", body:"lorem ipsum ligma ballz", id:1},
        {title:"The Dusk", author:"Zoro", body:"lorem ipsum ligma ballz", id:2},
        {title:"The Twilight", author:"Sanji", body:"lorem ipsum ligma ballz", id:3},
    ])
    return ( 
        <div className="home">
            {blogs.map(blog =>(
                <div className="preview-blogs" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by sir {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;