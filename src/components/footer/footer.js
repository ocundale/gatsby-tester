import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Footer } from './footer.styled';
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
              <a href="mailto:hi@spanishwithcriss.com">
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
                href="https://www.youtube.com/channel/UCLgqmD_eKS42drvySe7Mp_A"
              >
                {' '}
                <Youtube />
              </a>
            </li>
            <li className="socIcon">
              <a
                title="whatsapp"
                href="https://api.whatsapp.com/send?phone=+573207417349"
              >
                {' '}
                <Whatsapp />
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          © Spanish with Criss {currentYear}
        </Grid>
      </Grid>
    </Footer>
  );
};

export default footer;
