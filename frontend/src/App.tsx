import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Footer from "./components/Footer/Footer.tsx";
import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kids_banner from './components/assets/banner_kids.png';


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Shop/>}/>
                    <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens"/>}></Route>
                    <Route path="/womens" element={<ShopCategory banner={women_banner} category="womens"/>}></Route>
                    <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
                    <Route path="/product" element={<Product/>}>
                        <Route path=":productId" element={<Product/>}/>
                    </Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/login" element={<LoginSignup/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
