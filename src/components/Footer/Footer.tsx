import './Footer.css';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-logo">Ghyciu</div>
        <p>
          <i>Through hardships to the stars</i>
        </p>
        <br />
        <Socials />
        <br />
        <a href="https://ghyciu.com">ghyciu.com</a>
        <p>© 2025 Ghyciu. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <h2>Links</h2>
        <a href="/">Welcome</a>
        <a href="/projects">Projects</a>
        <a href="/design">Design</a>
        <a href="/cosplay">Cosplay</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Footer;
