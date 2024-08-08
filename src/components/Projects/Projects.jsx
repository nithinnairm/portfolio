import "../Projects/projects.scss";
import viberr from "../../assets/viberr.png";
import burger from "../../assets/fresh-burger.png";
import ProjectCards from "../../common/ProjectCards";

const Projects = () => {
  return (
    <section className="projects container">
      <h1 className="sectionTitle">PROJECTS</h1>
      <div className="projectsContainer">
        <ProjectCards
          src={viberr}
          link="https://www.google.com"
          h3="Viber"
          para="Streaming app"
        />
        <ProjectCards
          src={burger}
          link="https://www.google.com"
          h3="Fresh Burger"
          para="Restaurant shop"
        />
      </div>
    </section>
  );
};

export default Projects;
