import React from 'react';
import './Home.css';
import profilePic from '../assets/Profile.jpg';// Replace with your photo

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <div className="hero-text">
          <h1>Hi, I'm <span>Mohan</span> 👋</h1>
          <p className="tagline">Artificial Intelligence Student | Aspiring Developer</p>
        </div>
      </section>

      {/* About Me */}
      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a passionate Artificial Intelligent student who loves building web applications
          and solving real-world problems. I enjoy learning new technologies and creating
          projects that make a difference.
        </p>
      </section>

      {/* Research Interests */}
      <section className="card">
        <h2>Research Interests</h2>
        <ul>
          <li>🤖 Artificial Intelligence & Machine Learning</li>
          <li>🌐 Data Science</li>
          <li>☁️ Cloud Computing</li>
        </ul>
      </section>

      {/* Personal Details */}
      <section className="card">
        <h2>Personal Details</h2>
        <table className="details-table">
          <tbody>
            <tr><td>📛 Name</td><td>Mohan Royal</td></tr>
            <tr><td>📞 Phone</td><td>+91 9488556666</td></tr>
            <tr><td>📧 Personal Email</td><td>mohanlakku07@gmail.com</td></tr>
            <tr><td>🎓 College Email</td><td>se23uari142@mahindrauniversity.edu.in</td></tr>
          </tbody>
        </table>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Skills</h2>
        <div className="skills-grid">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C', 'Git', 'SQL'].map(skill => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;