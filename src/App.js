import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product/:id" element={<Product />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
