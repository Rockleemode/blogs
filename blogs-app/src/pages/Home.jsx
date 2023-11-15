import {} from "react";
import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data:blogs, isLoading, error} = useFetch("http://localhost:8000/blogs");
    return ( 
        <div className="home">
            {error && <h2 style={{color:"rgb(247, 66, 66)"}}>{error}</h2>}
            {isLoading && "loading..."}
           {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Home;