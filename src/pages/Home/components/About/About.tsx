import AboutHeader from './components/AboutHeader';
import AboutDescription from './components/AboutDescription';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <AboutHeader title="About Me" />
        <AboutDescription />
      </div>
    </div>
  );
};

export default About;
