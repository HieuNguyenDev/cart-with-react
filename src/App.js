import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import Shop from './components/Shop';
import Cart from './components/Cart';
import DetailProduct from './components/DetailProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartProvider>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<DetailProduct />} />
          </Routes>
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
