import "./Hero.scss";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import xIconLight from "../../assets/twitter-light.svg";
import xIconDark from "../../assets/twitter-dark.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedinIconLight from "../../assets/linkedin-light.svg";
import linkedinIconDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const xIcon = theme === "light" ? xIconLight : xIconDark;
  const githubIcon = theme === "light" ? githubIconLight : githubIconDark;
  const linkedinIcon = theme === "light" ? linkedinIconLight : linkedinIconDark;

  return (
    <section id="hero" className="container">
      <div className="color-mode-container">
        <img src={heroImg} className="hero-img" alt="profile dp" />
        <img
          src={themeIcon}
          alt="theme switch"
          className="color-mode"
          onClick={toggleTheme}
        />
      </div>
      <div className="info">
        <h1>
          Nithin <br />
          Nair
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={xIcon} alt="twitter" />
          </a>{" "}
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>{" "}
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </span>
        <p>Passionately building modern apps...</p>
        <a href={CV} download>
          <button className="Hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
