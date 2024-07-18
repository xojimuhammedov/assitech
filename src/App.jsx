import Nav from "./components/Nav/Nav";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import Footer from "./components/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import Phone from "./assets/Phone";
import CoursePage from "./pages/CoursePage/CoursePage";
import InstallPage from "./pages/InstallPage/InstallPage";
function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <div className="home-fixed">
        <a href="tel:+998998159885">
          <Phone />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/instal" element={<InstallPage />} />
        <Route path="/service/:id" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
