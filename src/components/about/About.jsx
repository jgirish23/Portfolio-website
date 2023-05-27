import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="left-about">
        <p className="about-name">
          I'm <span className="">Jakkala Girish.</span>
        </p>
        <div className="about-content">
          <div className="">
            <p>
              I have been coding<span className="emoji">👨‍💻</span> for nearly 3
              years, learning something new each day. I love to delve into new
              technologies and learn more about them.
            </p>
            <p className="">
              When I am not coding, I like to play basketball
              <span className="emoji">🏀</span>, badminton
              <span className="emoji">🏸</span>and watch anime.
              <span className="emoji">📖.</span>
            </p>
            <p className="">
              My New Year's resolution is to start going to Gym 💪.
            </p>
            <p className="m-top">
              My preferred weapons of choice <span className="emoji">👇.</span>
            </p>
          </div>
          <div className="button-grid-container m-top">
            <button className="grid-button">Django</button>
            <button className="grid-button">Flask</button>
            <button className="grid-button">Selenium</button>
            <button className="grid-button">React js</button>
          </div>
        </div>
        <div className="github-container">
          <button className="github">
            <a target={"_blank"} href="https://www.github.com/jgirish23">
              <span className="emoji">🔗</span> My Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
