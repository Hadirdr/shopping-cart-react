import './App.css';
import{Route ,Routes,Navigate } from 'react-router-dom';
import Store from './components/Store';
import ProductContextProvider from './context/ProductContextProvider';
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
      <Routes>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Store/>}/>
        <Route path="/cart" element={<ShopCart/>}/>
        <Route path="/*" element={<Navigate to={"/products"}/>}/>
      </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
