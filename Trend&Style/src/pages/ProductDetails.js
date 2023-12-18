import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8000/Products/${ProductId}`).then((res)=>res.json()).then((data)=>{setProducts(data)})
    },[])
    const {ProductId} = useParams();
    return(<>
        {products && <div className="card" >
        <img className="card-img-top" src={products.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
          <p className="card-text">{products.description}</p>
          <p className="card-text">{products.price}$</p>
        </div>
      </div> }
        </>)
}export default ProductDetails;