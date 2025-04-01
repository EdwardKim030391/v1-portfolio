import profile from '../assets/Edward.jpg';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title"><span>01.</span> About Me</h2>
      <div className="about-content">
        <div className="about-text">
        <p>
          Hello, My name is Edward Kim. I'm a software engineer with a professional background in hospitality,
          specializing in the development of intuitive, user-centric web applications.
        </p>
        <p>
         Leveraging strong attention to detail and a service-oriented mindset,
        I aim to design digital solutions that are not only functional but also meaningful—bringing comfort, clarity, and value to every user interaction.
        </p>
        <p>
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="tech-list">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={profile} alt="Edward Kim selfie" />
        </div>
      </div>
    </section>
  );
};

export default About;
