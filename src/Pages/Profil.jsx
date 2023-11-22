import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronRight,
  faCamera,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
function Profil() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activeTab, setActiveTab] = useState("profil");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("user_email");
    setEmail(userEmail);
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch(`/api/get_user_data/?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        setFirstName(data.first_name);
        setLastName(data.last_name);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  const handleSaveChanges = () => {
    const updatedUserData = {
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    fetch("/api/update_profile/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Profile updated successfully");
        navigate("/login");
        fetchUserData();
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handlePasswordChange = () => {
    const passwordData = {
      email: email,
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    fetch("/api/update_password/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
    })
      .then((response) => response.json())
      .then(() => {
        console.log("Password updated successfully");
        navigate("/login");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        console.error("Error updating password:", error);
      });
  };

  return (
    <section className="section-profil">
      <div className="container grid grid--2-cols">
        <div className="user-page">
          <div className="user-title">
            <h1>User Page</h1>
          </div>
          <div className="tab-buttons">
            <button
              className={activeTab === "profil" ? "active" : ""}
              onClick={() => setActiveTab("profil")}
            >
              <FontAwesomeIcon className="profil-icon " icon={faUser} />
              Profile
            </button>
            <button
              className={activeTab === "privacy" ? "active" : ""}
              onClick={() => setActiveTab("privacy")}
            >
              <FontAwesomeIcon className="profil-icon " icon={faLock} />
              Privacy
            </button>
            <button
              className={activeTab === "photo" ? "active" : ""}
              onClick={() => setActiveTab("photo")}
            >
              <FontAwesomeIcon className="profil-icon " icon={faCamera} />
              Photo
            </button>
          </div>
        </div>
        <div>
          {activeTab === "profil" && (
            <div className="input-section">
              <label>First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Narmin"
              />
              <label>Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Orujova"
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="narminorujova@gmail.com"
              />
              <div className="btn-container">
                <button className="btn" onClick={handleSaveChanges}>
                  Save Changes
                  <FontAwesomeIcon
                    className="btn-icon "
                    icon={faChevronRight}
                  />
                </button>
              </div>
            </div>
          )}
          {activeTab === "privacy" && (
            <div className="input-section">
              <label>Old password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="*********"
              />
              <label>New password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="*********"
              />
              <label>Confirm new password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="*********"
              />
              <div className="btn-container">
                <button className="btn" onClick={handlePasswordChange}>
                  Change Password
                  <FontAwesomeIcon
                    className="btn-icon "
                    icon={faChevronRight}
                  />
                </button>
              </div>
            </div>
          )}
          {activeTab === "photo" && (
            <div className="input-section">
              <div className="photo-container">
                <img
                  data-purpose="image-preview"
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : "https://img-c.udemycdn.com/user/200_H/anonymous_3.png"
                  }
                  alt="Profil image"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <div className="btn-container">
                  <button className="btn">
                    Update photo
                    <FontAwesomeIcon
                      className="btn-icon "
                      icon={faChevronRight}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Profil;
