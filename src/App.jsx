import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import ProgressBar from "./Components/ProgressBar.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home",
      "/about": "About",
      "/contact": "Contact",
    };
    const pageTitle = titles[location.pathname] || "Page";
    document.title = `DK Home Cleaning | ${pageTitle}`;
  }, [location.pathname]);

  return (
    <>
      <ProgressBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
