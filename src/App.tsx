import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog/index.tsx";
import ProductDetails from "./routes/ClientHome/ProductDetailes/index.tsx";
import ClientHome from "./routes/ClientHome/index.tsx";
import Cart from "./routes/ClientHome/Cart/index.tsx";
import Login from "./routes/ClientHome/Login/index.tsx";
import { Admin } from "./routes/Admin/index.tsx";
import AdminHome from "./routes/Admin/AdminHome/index.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ClientHome />}>
                    <Route index element={<Catalog />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="login" element={<Login />} />
                    <Route path="product-details/:productId" element={<ProductDetails />} />
                </Route>
                <Route path='/admin/' element={<Admin/>}>
                    <Route index element={<AdminHome/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
