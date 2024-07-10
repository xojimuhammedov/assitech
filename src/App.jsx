import Nav from "./components/Nav/Nav";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import ServicePage from "./pages/ServicePage/ServicePage";
function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/company" element={<CompanyPage />} /> */}
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/service/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
