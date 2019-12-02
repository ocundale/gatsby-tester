import React from 'react'
import { Link } from 'gatsby'
import { Header } from './header.styled'
import Grid from '@material-ui/core/Grid'
import Navigation from './navigation'

const header = () => {
  return (
    <Header>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Link to="/">
            <h1>Spanish with Criss</h1>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Navigation />
        </Grid>
      </Grid>
      <hr/>
    </Header>
  );
}

export default header;