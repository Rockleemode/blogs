import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <h1>The Rock Blog</h1>
        <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blogs</Link>
            </div>
        </div>
     );
}
 
export default NavBar;