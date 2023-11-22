import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Firstpath = "assets/icon4.svg";
const IconFirst = `/static/${Firstpath}`;
const Secondpath = "assets/icon3.svg";
const IconSecond = `/static/${Secondpath}`;
const Thridpath = "assets/icon2.svg";
const IconThrid = `/static/${Thridpath}`;
const Fourthpath = "assets/icon1.svg";
const IconFourth = `/static/${Fourthpath}`;
const Step1path = "step1.jpeg";
const Step1 = `/static/${Step1path}`;
const Step2path = "step2.jpeg";
const Step2 = `/static/${Step2path}`;
const Step3path = "step3.jpeg";
const Step3 = `/static/${Step3path}`;
const Step4path = "step4.jpeg";
const Step4 = `/static/${Step4path}`;
const Step5path = "step5.png";
const Step5 = `/static/${Step5path}`;
const Narminpath = "Narmin.jpeg";
const Narmin = `/static/${Narminpath}`;
const Nuraypath = "Nuray.jpeg";
const Nuray = `/static/${Nuraypath}`;
function About() {
  return (
    <React.Fragment>
      <section className="section-about">
        <div className="container center-text">
          <h1 className="heading-primary font-lg">About</h1>
          <h2 className="heading-link">
            <Link className="margin-right-sm" to="/">
              Home <FontAwesomeIcon icon={faAngleRight} />
            </Link>

            <Link to="/contact" style={{ color: "#3555a0 " }}>
              About <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </h2>
        </div>
      </section>

      <section className="section-how">
        <div className="container ">
          <span className="subheading">Features</span>
          <h2 className="heading-secondary ">Our Mission</h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-description">
              HeaRead is a company that facilitates the learning process of all
              students, especially hearing impaired people, and will help them
              on this way.
            </p>
          </div>

          <div className="step-img-box mission-img-box">
            <img src={IconSecond} className="step-img" alt="Mission" />
          </div>
        </div>
      </section>

      <section className="section-how">
        <div className="container ">
          <span className="subheading">Advantages</span>
          <h2 className="heading-secondary ">Solutions for some problems</h2>
        </div>
        <div className="container grid grid--3-cols">
          <div className="feature">
            <img src={IconFirst} className="feature-icon" alt="Icon" />
            <p className="feature-title">Accessibility</p>
            <p className="feature-text">
              You can access both online and offline lessons, seminars etc. with
              the speaker joining from the website and sending a meeting link.
            </p>
          </div>
          <div className="feature">
            <img src={IconThrid} className="feature-icon" alt="Icon" />
            <p className="feature-title">Convenience</p>
            <p className="feature-text">
              You do not need to be near or hold the device for the
              vioce-to-text format in the app.
            </p>
          </div>
          <div className="feature">
            <img src={IconFourth} className="feature-icon" alt="Icon" />
            <p className="feature-title">Easy to use</p>
            <p className="feature-text">
              People of all age groups can easily use it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-how">
        <div className="container ">
          <span className="subheading"> Successes</span>
          <h2 className="heading-secondary">
            Achievements That Marked Our Journey
          </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Innovative Methods in Education Development
            </h3>
            <p className="step-description">
              2nd place in the Innovative Methods in Education Development
              competition dedicated to the 100th anniversary of Heydar Aliyev
            </p>
          </div>

          <div className="step-img-box">
            <img
              src={Step1}
              className="step-img"
              alt=" Innovative Methods in Education Development"
            />
          </div>

          <div className="step-img-box">
            <img
              src={Step2}
              className="step-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">
              Graduate of Viveka Company Creation Program
            </h3>
          </div>

          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">Graduate of Startup School</h3>
          </div>
          <div className="step-img-box">
            <img
              src={Step3}
              className="step-img"
              alt="iPhone app
            delivery screen"
            />
          </div>

          <div className="step-img-box">
            <img
              src={Step4}
              className="step-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">04</p>
            <h3 className="heading-tertiary">
              Participant of Product Owner Marathon
            </h3>
          </div>

          <div className="step-text-box">
            <p className="step-number">05</p>
            <h3 className="heading-tertiary">Hack4World Baku 2023 Hakaton</h3>
            <p className="step-description">
              3rd place in Hack4World Baku 2023 Hakaton
            </p>
          </div>
          <div className="step-img-box">
            <img
              src={Step5}
              className="step-img"
              alt="Hack4World Baku 2023 Hakaton"
            />
          </div>
        </div>
      </section>

      <section className="section-team">
        <div className="container center-text ">
          <span className="subheading"> Team</span>
          <h2 className="heading-secondary">Meet Our Incredible Team</h2>
        </div>

        <div className="container grid grid--2-cols grid--center-h ">
          <div className="feature center-text ">
            <img src={Nuray} className="team-img" alt="Team member" />
            <p className="feature-title">Team Leader</p>
            <p className="feature-text">
              Information Security Student at ASOIU
            </p>
          </div>
          <div className="feature center-text ">
            <img src={Narmin} className="team-img" alt="Team member" />
            <p className="feature-title">Full-stack Developer</p>
            <p className="feature-text">
              Information Security Student at ASOIU
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;
