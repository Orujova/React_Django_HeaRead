import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faMagnifyingGlass,
  faAtom,
  faDna,
  faBacterium,
  faLightbulb,
  faHeadphones,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

const Heropath = "hero.jpg";
const Hero = `/static/${Heropath}`;
const Chemistrypath = "chemisty.jpg";
const Chemistry = `/static/${Chemistrypath}`;
const Biologypath = "biology.jpg";
const Biology = `/static/${Biologypath}`;
const Technologypath = "technology.jpg";
const Technology = `/static/${Technologypath}`;

function Home() {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">Record and Transcribe Voice</h1>
            <p className="hero-description">
              Convert spoken words into text with ease. Start recording and let
              our technology transcribe it for you.
            </p>
            <Link to="/records" className="btn btn--full margin-right-sm">
              Start Recording Voice
            </Link>
          </div>
          <div className="hero-img-box">
            <img src={Hero} className="hero-img" alt="Woman record voice" />
          </div>
        </div>
      </section>

      <section className="section-choices" id="choices">
        <div className="container center-text">
          <span className="subheading">Choices</span>
          <h2 className="heading-secondary">Discover Exciting Choices</h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="choice">
            <img src={Chemistry} className="choice-img" alt="Chemistry" />
            <div className="choice-content">
              <p className="choice-title">Chemistry</p>
              <ul className="choice-attributes">
                <li className="choice-attribute">
                  <FontAwesomeIcon className="choice-icon" icon={faFlask} />
                  <span>Physical Sciences</span>
                </li>
                <li className="choice-attribute">
                  <FontAwesomeIcon
                    className="choice-icon"
                    icon={faMagnifyingGlass}
                  />
                  <span>Research and Analysis</span>
                </li>
                <li className="choice-attribute">
                  <FontAwesomeIcon className="choice-icon" icon={faAtom} />
                  <span>Organic & Inorganic</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="choice">
            <img src={Biology} className="choice-img" alt="Biology" />
            <div className="choice-content">
              <p className="choice-title">Biology</p>
              <ul className="choice-attributes">
                <li className="choice-attribute">
                  <FontAwesomeIcon className="choice-icon" icon={faDna} />
                  <span>Life Sciences</span>
                </li>
                <li className="choice-attribute">
                  <FontAwesomeIcon className="choice-icon" icon={faBacterium} />
                  <span>Living Organisms</span>
                </li>
                <li className="choice-attribute">
                  <FontAwesomeIcon
                    className="choice-icon"
                    icon={faMagnifyingGlass}
                  />
                  <span>Research & Discovery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="choice">
            <img src={Technology} className="choice-img" alt="Technology" />
            <div className="choice-content">
              <p className="choice-title">Technology</p>
              <ul className="choice-attributes">
                <li className="choice-attribute">
                  <FontAwesomeIcon
                    className="choice-icon"
                    icon={faHeadphones}
                  />
                  <span>Information Technology</span>
                </li>
                <li className="choice-attribute">
                  <FontAwesomeIcon className="choice-icon" icon={faLightbulb} />
                  <span>Innovation</span>
                </li>
                <li className="choice-attribute">
                  <FontAwesomeIcon className="choice-icon" icon={faServer} />
                  <span>Software & Hardware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container all-recipes">
          <a href="#" className="link">
            See all recipes &rarr;
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
