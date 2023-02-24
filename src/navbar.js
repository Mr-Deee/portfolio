import {Link} from 'react-router-dom'


const Navbar = () => {
    return (  
<nav className="navbar">
    <h1>
        D|N
    </h1>
    <div className= 'links'>
       <Link to="/">Home</Link> 
       <Link to ="/project" style={{}}>Projects</Link> 
       <Link to ="/">Contact</Link>
    </div>
</nav>

    );
}
 
export default Navbar;