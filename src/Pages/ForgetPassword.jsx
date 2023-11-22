import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight, faLock } from "@fortawesome/free-solid-svg-icons";

const Firstpath = "assets/icon1.svg";
const Secondpath = "assets/icon3.svg";
const IconFirst = `/static/${Firstpath}`;
const IconSecond = `/static/${Secondpath}`;

function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async () => {
    try {
      const response = await fetch("/api/send-reset-code-email/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStep(2);
      } else {
        console.error("Error sending reset code.");
      }
    } catch (error) {
      console.error("Error sending reset code:", error);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch("/api/reset-password-with-code/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reset_code: resetCode,
          new_password: newPassword,
        }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const errorData = await response.json();
        console.error("Error resetting password:", errorData.error);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <section className="section-changepass">
      <div className="container">
        <h3 className="heading-secondary center-text">Change Password</h3>
        <div className="password-intro">
          <div className="code-intro">
            {step === 1 && (
              <div>
                <h4>Email</h4>
                <div className="input-container">
                  <FontAwesomeIcon className="message-icon" icon={faEnvelope} />

                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="btn-container">
                  <button className="btn  " onClick={handleSendCode}>
                    Reset password
                    <FontAwesomeIcon
                      className="btn-icon "
                      icon={faChevronRight}
                    />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div>
                  <h4>Reset code</h4>

                  <div className="input-container">
                    <FontAwesomeIcon
                      className="message-icon"
                      icon={faCircleCheck}
                    />
                    <input
                      type="number"
                      placeholder="Reset code"
                      value={resetCode}
                      onChange={(e) => setResetCode(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <h4>New password</h4>

                  <div className="input-container">
                    <FontAwesomeIcon className="message-icon" icon={faLock} />
                    <input
                      type="password"
                      value={newPassword}
                      placeholder="New Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="btn-container">
                    <button className="btn" onClick={handleResetPassword}>
                      Submit
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
          <img className="password--first" src={IconFirst} alt="Icon" />
          <img className="password--second" src={IconSecond} alt="Icon" />
        </div>
      </div>
    </section>
  );
}

export default ForgetPassword;
