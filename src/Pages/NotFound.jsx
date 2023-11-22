import { Link } from "react-router-dom";

const Firstpath = "assets/icon4.svg";
const IconFirst = `/static/${Firstpath}`;

function NotFound() {
  return (
    <>
      <section className="section-how">
        <div className="container grid grid--2-cols grid--center-v ">
          <div>
            <img
              className="notfound-image"
              src={IconFirst}
              alt="Not Found icon"
            />
          </div>
          <div className="error-content">
            <h1>
              40<span>4</span>{" "}
            </h1>
            <h3 className="heading-tertiary">
              Oops! It looks like you're lost.
            </h3>
            <p>
              The page you're looking for isn't available. Try to search again
              or use the go to.
            </p>
            <Link to="/" className="main-nav-link nav-cta">
              Go back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
