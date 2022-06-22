import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProductInfo from "./pages/ProductInfo";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SellerInfo from "./pages/SellerInfo";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                // autoClose={false}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/productinfo" element={<ProductInfo />}></Route>
                <Route path="/seller_info" element={<SellerInfo />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
