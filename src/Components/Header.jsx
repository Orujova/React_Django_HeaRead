import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { removeAuthToken } from "../Pages/Auth";

const logopath = "logo.png";
const Logo = `/static/${logopath}`;

function Header() {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const userDropdownStyle = {
    display: userDropdownOpen ? "block" : "none",
  };

  const handleUserClick = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    const userNameCookie = getCookie("user_name");
    setUserName(userNameCookie || "");
    const fullNameCookie = getCookie("full_name");
    setUserFullName(fullNameCookie || "");
    const userEmailCookie = getCookie("user_email");
    setUserEmail(userEmailCookie || "");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeNav = () => {
    setNavOpen(false);
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return "";
  };

  const handleLogout = () => {
    document.cookie = "user_name=; Max-Age=0; path=/;";
    setUserName("");
    removeAuthToken();
    window.location.reload();
    localStorage.removeItem("user_name");
    navigate("/login");
  };

  const formatUserName = (name) => {
    if (name) {
      const [firstName, lastName] = name.split(" ");
      const formattedName =
        firstName.toUpperCase() +
        (lastName ? lastName.charAt(0).toUpperCase() : "");
      return formattedName;
    }
    return null;
  };

  const cleanedUserFullName = userFullName.replace(/["']/g, "");
  const cleanuserEmail = userEmail.replace(/["']/g, "");

  const userDropdown = (
    <div style={userDropdownStyle} className="user-dropdown">
      <div className="user-info">
        <div className="username">
          <span>{formatUserName(userName)}</span>
        </div>
        <div>
          <div className="user-fullname">{cleanedUserFullName}</div>

          <span className="user-email">{cleanuserEmail}</span>
        </div>
      </div>
      <div>
        <Link to="/Profil" className="user-link">
          User Page
        </Link>
        <span className="logout" onClick={handleLogout}>
          Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </span>
      </div>
    </div>
  );

  return (
    <header
      className={`header ${isNavOpen ? "nav-open" : ""} ${
        isSticky ? "sticky-header" : ""
      }`}
    >
      <NavLink to="/">
        <img className="logo" alt="HeaRead logo" src={Logo} />
      </NavLink>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <NavLink className="main-nav-link" to="/records" onClick={closeNav}>
              Records
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/archive" onClick={closeNav}>
              Archive
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/about" onClick={closeNav}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="main-nav-link" to="/contact" onClick={closeNav}>
              Contact
            </NavLink>
          </li>
          {userName ? (
            <li>
              <span className="username" onClick={handleUserClick}>
                {userName}
              </span>
              {userDropdownOpen && userDropdown}
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  className="main-nav-link nav-cta"
                  to="/login"
                  onClick={closeNav}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="main-nav-link nav-cta"
                  to="/register"
                  onClick={closeNav}
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={toggleNav}>
        <FontAwesomeIcon
          className="icon-mobile-nav"
          icon={isNavOpen ? faTimes : faBars}
        />
      </button>
    </header>
  );
}

export default Header;
