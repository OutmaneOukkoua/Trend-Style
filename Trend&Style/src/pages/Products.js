import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2' ;

function Products(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        GetAllProducts();
    },[])
 
    const GetAllProducts = () =>{
        fetch('http://localhost:8000/Products').then((res)=>res.json()).then((data)=>{setProducts(data)})
    }
    const DeleteProduct = (ProductId) =>{
        Swal.fire({
            title: `Are you Sure to Delete ${products.title} ?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            showCancelButton: true
          }).then((data)=>{
            if (data.isConfirmed){
                fetch(`http://localhost:8000/Products/${ProductId}`,{ method:'DELETE'})
                .then((res)=>res.json()).then(()=>{GetAllProducts()})  
            }
          });
           
    }


    return(<>
        <Link to={'/products/add'} className="btn btn-success mt-3">
                  Add New Products
                </Link>
        <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>{
            return(<tr key={product.id}>
                <th scope="row" style={{maxWidth:'100px'}}>{product.id}</th>
                <td style={{maxWidth:'100px'}}>{product.title}</td>
                <td style={{maxWidth:'100px'}}>{product.description}</td>
                <td style={{maxWidth:'100px'}}>{product.price}</td>
                <td style={{maxWidth:'100px'}}>
                <Link to={`/products/${product.id}/update`} className="btn btn-primary mr-2" >
                      Edit
                    </Link>
                    <Link to={`/products/${product.id}`} className="btn btn-info mr-2">
                      View
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={()=>{DeleteProduct(product.id)}}>
                      Delete
                    </button>
                </td>
              </tr>)
          })}
          
        </tbody>
      </table>        </>)
}export default Products;