import checkLight from "../../assets/checkmark-dark.svg";
import checkDark from "../../assets/checkmark-light.svg";
import SkillList from "../SkillList/SkillList";
// import theme from "../../common/ThemeContext";

const Skills = () => {
  //   let checkImg = theme == "light" ? checkDark : checkLight;
  return (
    <section id="skills">
      <div className="container">
        <h1>skills</h1>
        <div className="skillList">
          <SkillList img={checkDark} skill="HTML" />
          <SkillList img={checkDark} skill="CSS" />
          <SkillList img={checkDark} skill="Typescript" />
          <SkillList img={checkDark} skill="Javascript" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
