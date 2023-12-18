import { Link } from "react-router-dom";
function Navbar() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <Link className="navbar-brand" to={'/'} >Trend & Style</Link> 

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
             <Link className="nav-link" to={'/'}>Home </Link> 
          </li>
          
        </ul>
      </div>
    </nav>
      </>
    );
  }
  
  export default Navbar;
  