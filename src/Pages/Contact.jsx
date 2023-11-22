import { Link } from "react-router-dom";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "swiper/swiper-bundle.css";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMugHot,
  faPhone,
  faLocationDot,
  faClock,
  faEnvelope,
  faAngleRight,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selectedIcon: null,
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.selectedIcon !== "faMugHot") {
        showErrorToast("You are not human!");
        return;
      }

      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        showSuccessToast("Thanks! Your contact information has been saved.");
      } else {
        showErrorToast("The form could not be submitted: " + data.error);
      }
    } catch (error) {
      showErrorToast("The form could not be submitted: " + error.message);
    }
  };

  const handleIconSelect = (icon) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedIcon: icon,
    }));
  };

  const showErrorToast = (message) => {
    showToast(message, "error");
  };

  const showSuccessToast = (message) => {
    showToast(message, "success");
  };

  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      closeButton: false,
      style: {
        height: "90px",
        fontSize: "20px",
      },
    });
  };
  return (
    <React.Fragment>
      <section className="section-contact">
        <div className="container center-text">
          <h1 className="heading-primary font-lg">Contact Us</h1>
          <h2 className="heading-link">
            <Link className="margin-right-sm" to="/">
              Home <FontAwesomeIcon icon={faAngleRight} />
            </Link>

            <Link to="/contact" style={{ color: "#3555a0 " }}>
              Contact <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </h2>
        </div>
      </section>

      <section className="section-location ">
        <div className="container">
          <div className="location-content">
            <div className="grid grid--4-cols margin-bottom-md">
              {[
                { icon: faPhone, title: "Phone", text: "+994 55 222 59 04" },
                {
                  icon: faLocationDot,
                  title: "Address",
                  text: "Baku,Azerbaijan",
                },
                {
                  icon: faClock,
                  title: "Open time",
                  text: "10:00 am to 23:00 pm",
                },
                {
                  icon: faEnvelope,
                  title: "Email",
                  text: "hearead22@gmail.com",
                },
              ].map((item, index) => (
                <div key={index} className="center-text">
                  <FontAwesomeIcon icon={item.icon} className="loc-icon" />
                  <h4 className="location-title">{item.title}</h4>
                  <p className="location-text">{item.text}</p>
                </div>
              ))}
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82774.69671830302!2d24.077286625210185!3d56.96328499537209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1549536732147"
                width="100%"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cta">
            <h2 className="heading-secondary">Get in Touch</h2>

            <form className="cta-form " onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <textarea
                className="column-one"
                placeholder="Your Message"
                cols="30"
                rows="8"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <div className="cta-human column-one">
                <p className="subheading">
                  Please prove you are human by selecting the
                  <span> Cup</span>
                </p>

                {[
                  { icon: faHeart, name: "faHeart" },
                  { icon: faMugHot, name: "faMugHot" },
                  { icon: faPlane, name: "faPlane" },
                ].map((item) => (
                  <FontAwesomeIcon
                    key={item.name}
                    icon={item.icon}
                    className="human-icon"
                    onClick={() => handleIconSelect(item.name)}
                  />
                ))}
              </div>

              <button className="btn btn--form column-one" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
