import logo from '../assets/portpolio-image1.png';

const NavBar = ({ show }) => {
  return (
    <header className={`navbar ${show ? 'visible' : 'hidden'}`}>
    <a href="#hero" className="logo-wrapper" style={{ cursor: 'pointer' }}>
     <img src={logo} alt="Edward Kim Logo" className="logo-image" />
    </a>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </nav>
    </header>
  );
};

export default NavBar;
