import { Link } from "react-router-dom";

function Sidebar(){
    return(<>
        <ul className="list-unstyled sidebar">
        <li><Link to={'/products'}>Get All Products</Link></li>
        <li><a href="#">Get All Category</a></li>
        </ul>
        </>)
}export default Sidebar;