import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "./Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const access_token = data.access_token;

        setAuthToken(access_token);

        console.log("Logged in:", data);

        const user = data.user_data;

        if (user?.first_name && user?.last_name) {
          const formattedUserName =
            (user.first_name[0]?.toUpperCase() || "") +
            (user.last_name[0]?.toUpperCase() || "");

          localStorage.setItem(
            "user_name",
            `${user.first_name} ${user.last_name}`
          );
          setCookie("user_name", formattedUserName, 1);
        } else {
          console.error(
            "Error: First name or last name is missing in user_data"
          );
        }

        navigate("/");
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.error || "An error occurred during login.";
        setError(errorMessage);
        console.error("Login error:", errorMessage);
      }
    } catch (error) {
      const errorMessage = "An error occurred during login.";
      setError(errorMessage);
      console.error("Error:", error);
    }
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="grid grid--2-cols">
          <div>
            <h2 className="heading-secondary">Login</h2>
            <p className="login-text">Login to access your HeaRead account</p>
            <form className="login-form" onSubmit={handleLogin}>
              <fieldset className="login-fieldset">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@gmail.com"
                />
              </fieldset>
              <fieldset className="login-fieldset">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="•••••••••••••••••••••••••"
                />
              </fieldset>
              <div className="login_remember">
                <div>
                  <input type="checkbox" name="remember-me" id="" />
                  <label>Remember Me</label>
                </div>
                <Link to="/forgetPassword" className="link">
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn--form">
                Login
              </button>
              {error && <h6 className="error-message">{error}</h6>}
            </form>
            <div className="have-acount">
              <p>
                Don’t have an account?
                <Link className="link" to="/register">
                  Sign up
                </Link>
              </p>
              <span>Or login with</span>
            </div>
            <div className="login-icons grid grid--3-cols">
              <div>
                <FaFacebook className="social-icon" />
                <span>Facebook</span>
              </div>
              <div>
                <AiOutlineInstagram className="social-icon" />
                <span>Instagram</span>
              </div>
              <div>
                <FaTwitter className="social-icon" />
                <span>Twitter</span>
              </div>
            </div>
          </div>
          <div
            className="login-img-box"
            role="img"
            aria-label="Login image"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Login;
