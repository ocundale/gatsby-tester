import React from 'react'
import base from './base.css'
import Container from './container'
import Header from './header/header'
import Footer from './footer/footer';

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
        <Container className={this.props.className}>
          <Header />
          {children}
          <Footer />
        </Container>
    )
  }
}

export default Template
