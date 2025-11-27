import Title from '../../../../components/Title/Title';
import Description from '../../../../components/Description/Description';

import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <Title>About Me</Title>
        <Description>
          <p>
            I'm a software engineer based in Manila, Philippines with experience in building web and mobile applications using modern technologies. I'm passionate about creating efficient and
            user-friendly software solutions for clients across various industries.
          </p>
          <p>
            In my free time, I enjoy exploring new programming languages, contributing to open-source projects, and staying updated with the latest industry trends. Feel free to check out my projects
            and get in touch!
          </p>
          <p>Other than programming, I love playing video games and cosplaying as my favorite characters at local conventions.</p>
        </Description>
      </div>
    </div>
  );
};

export default About;
