import "../css/Footer.css";

const logopath = "logo.png";
const Logo = `/static/${logopath}`;
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";
function footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <NavLink className="footer-logo" to="/">
            <img className="logo" alt="HeaRead logo" src={Logo} />
          </NavLink>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <AiOutlineInstagram className="social-icon"></AiOutlineInstagram>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <FaFacebook className="social-icon"></FaFacebook>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <FaTwitter
                  className="social-icon"
                  name="logo-twitter"
                ></FaTwitter>
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2023</span> by HeaRead, Inc.
            All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                +994 55 222 59 04
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hearead22@gmail.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About HeaRead
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default footer;
