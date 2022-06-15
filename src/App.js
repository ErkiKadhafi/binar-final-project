import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SaleListPage from "./pages/SaleListPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/list" element={<SaleListPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
