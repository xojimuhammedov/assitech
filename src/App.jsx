import Nav from "./components/Nav/Nav";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
