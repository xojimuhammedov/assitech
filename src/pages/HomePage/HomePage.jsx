import Contact from "../../components/Contact/Contact";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";
import Services from "./components/Services";
import Statistic from "./components/Statics";

function HomePage() {
  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      <Main />
      <Products />
      <Statistic />
      <Contact />
    </>
  );
}

export default HomePage;
