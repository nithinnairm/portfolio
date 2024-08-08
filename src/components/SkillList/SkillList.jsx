import "./SkillList.scss";

const skillList = ({ img, skill }) => {
  return (
    <div>
      <img src={img} alt="check icon" className="check-mark-icon" />
      <p> {skill}</p>
    </div>
  );
};
export default skillList;
