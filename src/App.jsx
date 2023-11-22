import "./App.css";
import "./css/Header.css";
import "./css/Contact.css";
import "./css/Home.css";
import "./css/login.css";
import "./css/Records.css";
import "./css/About.css";
import "./css/Archive.css";
import "./css/Footer.css";
import "./css/Password.css";
import "./css/Profil.css";
import "./css/NotFound.css";
import "./css/Responsive.css";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Header from "./Components/Header";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Records from "./Pages/Records";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Archive from "./Pages/Archive";
import Profil from "./Pages/Profil";
import ForgetPassword from "./Pages/ForgetPassword";
import Preloader from "./Components/Preloader";

import Favicon from "react-favicon";
import { ToastContainer } from "react-toastify";

const Logopath = "title-logo.png";
const Logo = `/static/${Logopath}`;

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "HeaRead";
  }, []);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <Favicon url={Logo} />
      {loading ? (
        <Preloader />
      ) : (
        <>
          {pathname !== "/not-found" &&
            pathname !== "/login" &&
            pathname !== "/register" && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/records" element={<Records />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />

            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
          {pathname !== "/not-found" && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
