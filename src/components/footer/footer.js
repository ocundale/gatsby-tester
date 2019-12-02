import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Footer } from './footer.styled';
import Link from '../link';
// import Newsletter from './newsletter';

import Mail from '../../images/mail.svg';
import Youtube from '../../images/youtube.svg';
import Whatsapp from '../../images/whatsapp.svg';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
// import Linkedin from '../../images/linkedin.svg';

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Footer>
      <Grid container justify="center">
        <Grid item xs={12}>
          <hr />
          <ul className="bottom-links">
            <li className="link">
              <a href="mailto: hi@spanishwithcriss.com">
                <Mail />
              </a>
            </li>
            <li className="socIcon">
              <a
                title="facebook"
                href="https://facebook.com/spanishwithcriss"
              >
              <Facebook />
              </a>
            </li>
            <li className="socIcon">
              <a
                title="instagram"
                href="https://instagram.com/spanishwithcriss"
              >
                {' '}
                <Instagram />
              </a>
            </li>
            {/* <li className="socIcon">
              <a
                title="linkedin"
                href="https://www.linkedin.com/criss-leon/"
              >
                {' '}
                <Linkedin />
              </a>
            </li> */}
            <li className="socIcon">
              <a
                title="youtube"
                href="https://www.youtube.com/spanishwithcriss/"
              >
                {' '}
                <Youtube />
              </a>
            </li>
            <li className="socIcon">
              <a
                title="whatsapp"
                href="https://api.whatsapp.com/send?phone=314324324&text=Hi,%20thanks%20for%20contacting%20me,%20I%20will%20get%20back%20to%20you%20as%20soon%20as%20possible!"
              >
                {' '}
                <Whatsapp />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          © Criss León {currentYear}
        </Grid>
      </Grid>
    </Footer>
  );
};

export default footer;
