import { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
function AddProduct(){
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState(0);
  const [description,setDescription] = useState('');
let navigate = useNavigate();
    const FormSubmit = (e) =>{
        e.preventDefault();

      axios.post('http://localhost:8000/Products',{
        title,
        price,
        description
      }).then(()=>{navigate('/products')});
    }
    return(
        <>
        <form onSubmit={FormSubmit}>
  <div className="mb-3">
    <label htmlFor="ProductTitle" className="form-label">Title</label>
    <input type="text" className="form-control" id="ProductTitle" aria-describedby="Tite" placeholder="Product Title"  onChange={(e)=>{
      setTitle(e.target.value)}}/>
  </div>

  <div className="mb-3">
  <label htmlFor="ProductDescription" className="form-label">Description</label>
  <input type="text" className="form-control" id="ProductDescription" aria-describedby="Description" placeholder="Product Description" onChange={(e)=>{
    setDescription(e.target.value)}}/>
</div>

  <div className="mb-3">
  <label htmlFor="ProductPrice" className="form-label">Price</label>
  <input type="number" className="form-control" id="ProductPrice" aria-describedby="Price" placeholder="Product Price" onChange={(e)=>{
    setPrice(e.target.value)}}/>
</div>


  <button type="submit" className="btn btn-primary">Add</button>
    </form>
        </>
    )
}export default AddProduct;