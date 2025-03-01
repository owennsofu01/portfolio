import "react";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <h1 className="home-title">I'm Owen Nsofu</h1>
        <h3 className="home-subtitle">Software Engineer & Graphic Designer</h3>
        <p className="home-description">
          Passionate about building innovative software solutions and creating
          visually appealing designs. I specialize in web and mobile
          development, ensuring seamless user experiences through modern
          technology and design principles.
        </p>
        <div className="home-buttons">
          <a href="../../assets/ow.pdf" download className="btn btn-primary">
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
