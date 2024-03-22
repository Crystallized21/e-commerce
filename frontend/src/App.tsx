import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Shop/>}/>
                    <Route path="/mens" element={<ShopCategory category="mens"/>}></Route>
                    <Route path="/womens" element={<ShopCategory category="womens"/>}></Route>
                    <Route path="/kids" element={<ShopCategory category="kid"/>}></Route>
                    <Route path="/product" element={<Product/>}>
                        <Route path=":productId" element={<Product/>}/>
                    </Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/login" element={<LoginSignup/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
