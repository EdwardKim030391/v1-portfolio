import signature from '../assets/portpolio-image3.png';

const Hero = () => {
  return (
    <section section id="hero" className="hero-container">
      <div className="hero-content">
        <p className="tagline">Hello! my name is</p>
        <img src={signature} alt="Edward Hansol Kim Signature" className="signature-image" />
        <p className="tagline tagline-sub">
          I’m a software engineer with a hospitality background,<br />
          creating user centered web applications that blend empathy, precision, and purpose.
        </p>
      </div>
    </section>
  );
};

export default Hero;
