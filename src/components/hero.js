import React from 'react'
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid'
import styles from './hero.module.css'
import { Link } from 'gatsby'
// import Learn from '../images/learn.png';

export default ({ data }) => (
  <div className={styles.hero}>
    <Grid container justify="center">
      <Grid item md={4} xs={12}>
        <Img className={styles.heroImage} alt={data.name} fluid={data.heroImage.fluid} />
      </Grid>
      <Grid item md={4} xs={12}>
        <div className={styles.heroDetails}>
          <h3 className={styles.heroHeadline}>
            {/* {data.name} */}
            Hello!
            </h3>
          <p className={styles.heroTitle}>{data.title}</p>
          {/* <p>{data.shortBio.shortBio}</p> */}
        </div>
      </Grid>
      <Grid item md={4} xs={12}>
        <div className={styles.heroDetails}>
        <Img  alt={data.name} fluid={data.heroImage.fluid} />
        <Link to="/spanish-classes/">
          <a href="#" class="purplebutton">Let's get started!</a>
        </Link>
          {/* <p>{data.shortBio.shortBio}</p> */}
        </div>
      </Grid>
    </Grid>
  </div>
)
