import { Link } from "react-router-dom";
const NotFound = () => {
    const myStyles = {
        position:"relative",
        left:'40%',
        top:"20px"
    }
    return (  
        <div className="404-page" style={myStyles}>
            <h1 style={{color:"red"}}>OPP....</h1>
            <h1 style={{color:"red"}}>404 Page</h1>
            <h1>go back <Link to={"/"}>Home</Link></h1>
        </div>
    );
}
 
export default NotFound;