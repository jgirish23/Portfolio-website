import "./Intro.css";
import Coder from "../../assets/coder.png";

export default function Intro() {
  return (
    <div className="intro">
      <p className="intro-first-line">HI, MY NAME IS</p>
      <p className="name">Jakkala Girish.</p>
      <p className="name">I am a full-stack dev.</p>
      <div className="intro-content">
        <div className="one-liner">
          <p>
            I am a 3rd year engineering graduate, interested in web development,
            with a focus on the <u>BACK-END</u>.
          </p>

          <button className="main-button">
            <a href="mailto:girish23jakkala@gmail.com">
              Do You Want To Work With Me?
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
