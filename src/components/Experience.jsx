const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title"><span>02.</span> Where I’ve Worked</h2>

      {/* General Assembly */}
      <div className="experience-item">
        <h3 className="job-title">
          Software Engineer Fellow <span>@ General Assembly</span>
        </h3>
        <p className="job-date">Dec 2024 – Mar 2025</p>
        <ul className="job-description">
          <li>Completed a 12-week immersive program focused on full-stack development.</li>
          <li>Built and deployed 4 full-stack applications using React, Express, and MongoDB.</li>
          <li>Practiced Agile workflows, pair programming, and frequent code reviews.</li>
        </ul>
      </div>

      {/* Coffee Monster */}
      <div className="experience-item">
        <h3 className="job-title">
          Barista / Training Manager <span>@ Coffee Monster</span>
        </h3>
        <p className="job-date">Aug 2021 – Aug 2023</p>
        <ul className="job-description">
          <li>Trained and onboarded new staff to maintain high service standards.</li>
          <li>Managed inventory and operations in a fast-paced, high-volume environment.</li>
        </ul>
      </div>

      {/* Las Vegas Mania */}
      <div className="experience-item">
        <h3 className="job-title">
          Tour Guide <span>@ Las Vegas Mania</span>
        </h3>
        <p className="job-date">Jan 2017 – Mar 2018</p>
        <ul className="job-description">
          <li>Led immersive tours of Las Vegas and the Grand Canyon with engaging storytelling.</li>
          <li>Developed strong public speaking and customer relationship skills.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
