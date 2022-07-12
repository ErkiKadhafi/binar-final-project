import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import AddProduct from "./pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SellerInfo from "./pages/SellerInfo";
import { useSelector } from "react-redux";
import SaleListPage from "./pages/SaleListPage";
import Notification from "./pages/Notification";

function App() {
    const { isAuthenticated } = useSelector((store) => store.user);

    const AuthRoute = ({ children }) => {
        if (!isAuthenticated) {
            return children;
        } else return <Navigate to="/" replace />;
    };
    const ContentRoute = ({ children }) => {
        if (isAuthenticated) {
            return children;
        } else return <Navigate to="/login" replace />;
    };

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
                <Route
                    path="/profile"
                    element={
                        <ContentRoute>
                            <Profile />
                        </ContentRoute>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <AuthRoute>
                            <Register />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <AuthRoute>
                            <Login />
                        </AuthRoute>
                    }
                />
                <Route
                    path="/add_product"
                    element={
                        <ContentRoute>
                            <AddProduct />
                        </ContentRoute>
                    }
                ></Route>
                <Route path="/seller_info" element={<SellerInfo />}></Route>
                <Route path="/list" element={<SaleListPage />}></Route>
                <Route path="/notification" element={<Notification />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
