import React from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

class NotFound extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title="Not Found" />
          <div style={{textAlign:'center'}}>
            <h1>Page Not Found</h1>
            <Link to="/" >Go Home</Link>
          </div>
        </div>
      </Layout>
    )
  }
}
export default NotFound
