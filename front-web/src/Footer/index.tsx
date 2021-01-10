import './styles.css';

import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';

function Footer(){
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>

        <a href="https://www.linkedin.com/in/victor-queiroz-0038631a4/" target="_new">
          <LinkedinIcon />
        </a>

        <a href="https://www.instagram.com/victor.qrz/" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;