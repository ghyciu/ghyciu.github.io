import './Footer.css';
import Socials from '../Socials/Socials';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p>
          <i>
            <b>Ad astra per aspera.</b> Through hardships through the stars.
          </i>
        </p>
        <br />
        <a href="https://ghyciu.com">ghyciu.com</a>
        <p>© 2025 Ghyciu. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <Socials />
      </div>
    </div>
  );
};

export default Footer;
