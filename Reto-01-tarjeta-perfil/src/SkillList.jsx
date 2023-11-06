import "./style.css";
import Skill from "./skill";

export default function SkillList(props) {
  return (
    <div className="skill-list">
      {props.skills.map((e, index) => {
        return (
          <Skill key={index} skill={e.name} level={e.Level} color={e.color} />
        );
      })}
      {/* <Skill skill="React" emoji="😃" color="yellow" />
      <Skill skill="Angular" emoji="😃" color="blue" />
      <Skill skill="React" emoji="😃" color="yellow" />
      <Skill skill="React" emoji="😃" color="yellow" /> */}
    </div>
  );
}
