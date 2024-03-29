import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer";
import Header from "./components/nav/Header";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { selectIsLoggedIn } from "./redux/slice/authSlice";

function App() {
  // const navigate = useNavigate();
  const loggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/product/:id" element={<ProductDetails />}/>
      <Route path="/contact" element={<Contact/> }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={loggedIn ? <Cart/> : <Navigate to="/login" />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/reset" element={<Reset/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
