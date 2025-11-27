import Title from '../../../../components/Title/Title';
import AboutDescription from './components/AboutDescription';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <Title>About Me</Title>
        <AboutDescription />
      </div>
    </div>
  );
};

export default About;
