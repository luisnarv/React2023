import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillList from "./SkillList";
import "./style.css";

export default function App() {
  const name = "Luis kendor Narvaez Vidal";
  const image = "profile.webp";
  //"https://w7.pngwing.com/pngs/36/333/png-transparent-profile-avatar-person-account-basic-user-interface-icon.png";
  const skills = [
    { name: "JavaScript", emoji: "💪", color: "#46b946" },
    { name: "Node.js", emoji: "👍", color: "#6ea380" },
    { name: "React", emoji: "💪", color: "#3457cd" },
    { name: "Angular", emoji: "📚", color: "blue" },
    { name: "Redux", emoji: "👍", color: "#3457cd" },
    { name: "HTML5", emoji: "💪", color: "#46b946" },
    { name: "CSS", emoji: "💪", color: "#46b946" },
    { name: "SQL", emoji: "👍", color: "yellow" },
    { name: "MongoDB", emoji: "📚", color: "yellow" },
    { name: "Git", emoji: "😃", color: "red" },
    { name: "GitHub", emoji: "😃", color: "red" },
    { name: "C++", emoji: "📚", color: "#46b946" },
    { name: "TypeScript", emoji: "📚", color: "#46b946" },
    { name: "Python", emoji: "📚", color: "#46b946" },
  ];
  const resumen =
    "Full Stack Developer con background en redes informáticas, especializado en Front-end. Conocimientos en GIT, algoritmos y frameworks CSS. Experiencia en desarrollo de Front End y Back End con JavaScript, Node.js, React, Angular y Redux. Con habilidades en trabajo en equipo, resolución de problemas y adaptación a nuevas tecnologías.";

  return (
    <div className="card">
      <Avatar image={image} alt={name} />
      <div className="data">
        <Intro name={name} intro={resumen} />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}
