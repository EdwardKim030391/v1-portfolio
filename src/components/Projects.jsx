const Projects = () => {
  return (
    <section id="project" className="section">
      <h2 className="section-title"><span>03.</span> Some Things I’ve Built</h2>

      {/* Project 1 */}
      <div className="project-card">
        <h3 className="project-title">Learning Tracker App</h3>
        <p className="project-description">
          A full-stack productivity app that helps users log and visualize their study sessions.
          Features dynamic charts, mobile-friendly design, and clean UI/UX.
        </p>
        <ul className="tech-stack">
          <li>React</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Chart.js</li>
        </ul>
        <div className="project-links">
          <a href="https://github.com/EdwardKim030391/Learning-Tracker" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://learning-tracker-app-515476c4b302.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h3 className="project-title">Soccer League Simulator</h3>
        <p className="project-description">
          A Django web app that simulates a full European league season with dynamic team selection, match generation, and real-time standings.
        </p>
        <ul className="tech-stack">
          <li>Django</li>
          <li>Python</li>
          <li>PostgreSQL</li>
          <li>JavaScript</li>
        </ul>
        <div className="project-links">
          <a href="https://github.com/EdwardKim030391/Soccer-league" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://soccer-league-f8cb7ffa0929.herokuapp.com/" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
