import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiBootstrap,
  DiMysql,
  DiReact,
  DiGit,
  DiGithubBadge,
  DiSass
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "html", name: "HTML5",icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "git", name: "Git", icon: <DiGit /> },
  { id: "github", name: "Github", icon: <DiGithubBadge /> },
]

const TechnologiesContainer = () => {
  return <section className="technologies-container">
  <h2>Tecnologias</h2>
  <div className="technologies-grid">
    {technologies.map((tech) => (
      <div className="technology-card" id={tech.id} key={tech.id}>
        {tech.icon}
        <div className="technology-info">
          <h3>{tech.name}</h3>
        </div>
      </div>
    ))}
  </div>
</section>
}

export default TechnologiesContainer
