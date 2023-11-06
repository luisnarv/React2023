import "./style.css";

export default function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Principiante" && " 📚"}
        {level === "Intermedio" && " 👍"}
        {level === "Avanzado" && " 💪"}
      </span>
    </div>
  );
}
