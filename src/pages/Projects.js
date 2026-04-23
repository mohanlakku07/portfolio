import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Text Classifier",
    description: " Implemented text style classification fusing stylometric (lexical, syntactic) features with Sentence Transformer embeddings for richer author-style representation",
    tech: ["NLTK", "PyTorch", "scikit-learn"],
    github: "https://github.com/Yeshwanth110905/NLP-Project"
  },
  {
    title: "Memory Game",
    description: "The game features a graphical user interface, card matching logic, timers, move tracking, and multiple difficulty levels, demonstrating strong understanding of Java OOP concepts and event-driven programming.",
    tech: ["Java Swing", "AWT"],
    github: "https://github.com/jaswanth-student/Memory-Game"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
              🔗 View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;