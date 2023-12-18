import { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function UpdateProduct(){
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState(0);
    const [description,setDescription] = useState('');
    const {ProductId} = useParams();
    useEffect(() => {
        // Make an API request to get the product details based on ProductId
        axios.get(`http://localhost:8000/Products/${ProductId}`)
          .then(response => {
            const productData = response.data;
            setTitle(productData.title);
            setPrice(productData.price);
            setDescription(productData.description);
          })
          .catch(error => {
            console.error("Error fetching product data:", error);
          });
      }, [ProductId]);


  let navigate = useNavigate();
      const FormSubmit = (e) =>{
          e.preventDefault();
        axios.put(`http://localhost:8000/Products/${ProductId}`,{
          title,
          price,
          description
        }).then(()=>{navigate('/products')});
      }
    return(<>
        
            <form onSubmit={FormSubmit}>
      <div className="mb-3">
        <label htmlFor="ProductTitle" className="form-label">Title</label>
        <input type="text" className="form-control" id="ProductTitle" aria-describedby="Tite" placeholder="Product Title" value={title} onChange={(e)=>{
          setTitle(e.target.value)}}/>
      </div>
    
      <div className="mb-3">
      <label htmlFor="ProductDescription" className="form-label">Description</label>
      <input type="text" className="form-control" id="ProductDescription" aria-describedby="Description" value={description} placeholder="Product Description" onChange={(e)=>{
        setDescription(e.target.value)}}/>
    </div>
    
      <div className="mb-3">
      <label htmlFor="ProductPrice" className="form-label">Price</label>
      <input type="number" className="form-control" id="ProductPrice" aria-describedby="Price" value={price} placeholder="Product Price" onChange={(e)=>{
        setPrice(e.target.value)}}/>
    </div>
    
    
      <button type="submit" className="btn btn-primary">Add</button>
        </form>

        </>)
}export default UpdateProduct;