import './Socials.css';

import Social from './Social';

import XIcon from '../../assets/icons/sns_x.png';
import GithubIcon from '../../assets/icons/sns_github.png';
import InstagramIcon from '../../assets/icons/sns_instagram.png';
import MailIcon from '../../assets/icons/sns_mail.png';

const Socials = () => {
  return (
    <div className="socials">
      <Social icon={XIcon} href="https://x.com/ghyciu" alt="Twitter" />
      <Social icon={InstagramIcon} href="https://instagram.com/ghyciu" alt="Instagram" />
      <Social icon={GithubIcon} href="https://github.com/ghyciu" alt="GitHub" />
      <Social icon={MailIcon} href="mailto:contact@ghyciu.com" alt="Email" />
    </div>
  );
};

export default Socials;
