import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
      <div className='col-2 sidebar'><Sidebar/></div>
      <div className='col-10'>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/add" element={<AddProduct/>} />
        <Route path="/products/:ProductId" element={<ProductDetails/>} />
        <Route path="/products/:ProductId/update" element={<UpdateProduct/>} />


    </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
