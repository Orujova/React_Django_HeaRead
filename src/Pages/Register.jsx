import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import { setAuthToken } from "./Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const initialForm = {
    email: "",
    password: "",
    name: "",
    lastname: "",
    confirmpassword: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { password, email, name, lastname, confirmpassword } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          first_name: formState.name,
          last_name: formState.lastname,
          password: formState.password,

          confirmpassword: formState.confirmpassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const access_token = data.access_token;

        setAuthToken(access_token);

        toast.success(
          "Verification message sent to your email. Please check your inbox.",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeButton: false,

            style: {
              height: "90px",
              fontSize: "20px",
            },
          }
        );
      } else {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          setErrorMessage(errorData.error);
        } else {
          setErrorMessage(
            "An error occurred during registration. Please check your input and try again."
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(
        "An error occurred during registration. Please try again later."
      );
    }
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="grid grid--2-cols ">
          <div
            className="login-img-box"
            role="img"
            aria-label="Login image"
          ></div>
          <div>
            <h2 className="heading-secondary">Sign Up</h2>
            <p className="login-text">
              Let’s get you all st up so you can access your personal account.
            </p>
            <form className="login-form" onSubmit={handleSubmit}>
              <fieldset className="login-fieldset">
                <label>First Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </fieldset>
              <fieldset className="login-fieldset">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={handleChange}
                  placeholder="Doe"
                  required
                />
              </fieldset>

              <fieldset className="login-fieldset">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="john.doe@gmail.com"
                />
              </fieldset>

              <fieldset className="login-fieldset">
                <label>Password</label>
                <input
                  className="signup-placeholder"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="•••••••••••••••••••••••••"
                />
              </fieldset>
              <fieldset className="login-fieldset">
                <label>Confirm Password</label>
                <input
                  className="signup-placeholder"
                  name="confirmpassword"
                  value={confirmpassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="•••••••••••••••••••••••••"
                />
              </fieldset>

              <button className="btn btn--form " type="submit">
                Create account
              </button>
              {errorMessage && (
                <h6 className="error-message">{errorMessage}</h6>
              )}
            </form>

            <div className="have-acount">
              <p>
                Already have an account?{" "}
                <Link className="link" to="/login">
                  Login
                </Link>
              </p>
              <span>Or login with</span>
            </div>
            <div className="login-icons grid grid--3-cols ">
              <div>
                <FaFacebook className="social-icon"></FaFacebook>
                <span>Facebook</span>
              </div>
              <div>
                <AiOutlineInstagram className="social-icon"></AiOutlineInstagram>
                <span>Instagram</span>
              </div>
              <div>
                <FaTwitter className="social-icon"></FaTwitter>
                <span>Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
