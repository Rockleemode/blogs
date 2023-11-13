const NavBar = () => {
    return ( 
        <div className="nav-bar">
            <h1>The Rock Blog</h1>
        <div className="links">
                <a href="/">Home</a>
                <a href="/blogs" style={{background:"grey", borderRadius:"6px", color:"white"}}>New Blogs</a>
            </div>
        </div>
     );
}
 
export default NavBar;