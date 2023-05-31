
const Navbar=(toggle, setToggle)=>{
    return (
       <nav style={{left: toggle && "0"}} className="navbar">
             <ul className="navbar-links">
              <li onClick ={()=> setToggle(true)} className ="navbar-link">Home</li>
              <li onClick ={()=> setToggle(true)} className ="navbar-link">Authors</li>
              <li onClick ={()=> setToggle(true)} className ="navbar-link">About us</li>
              <li onClick ={()=> setToggle(true)} className ="navbar-link">Contact us</li>
              <li onClick ={()=> setToggle(true)} className ="navbar-link">Register</li>
            </ul>


       </nav>


    );
}
export default Navbar;