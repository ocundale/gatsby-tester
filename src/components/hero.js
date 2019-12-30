import React from 'react'
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid'
import styles from './hero.module.css'
import { Link } from 'gatsby'
import Image from './image/image';
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
        <Image
          src="learn.png"
          alt="Learn spanish classes"
          className="learn-image"
        ></Image>
        {/* <Learn /> */}
        <Link to="/spanish-classes/" className="purplebutton">
          {`Let's get started!`}
        </Link>
        {/* <p>{data.shortBio.shortBio}</p> */}
        </div>
      </Grid>
    </Grid>
  </div>
)
