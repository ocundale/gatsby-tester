import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
// import Image from '../components/image/image';

class ClassPage extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    return (
      <Layout location={this.props.location} >
        <div className="wrapper" style={{ padding: '0'}}>
          <h2 className="section-headline">About my Spanish classes</h2>
          <div className="paper-wrap">
            <p><strong>Video Class: $10 per hour</strong></p>
            <p><strong>First lesson FREE!</strong></p>
            <p><strong>If you like, you can choose the topic for the class.</strong></p>
            {/* <Image
              src="learn.png"
              alt="Learn spanish classes"
              className="learn-image"
            ></Image> */}
          </div>
          <h2 className="section-headline" style={{marginTop:"40px"}}>Contacts</h2>
          <p><strong>WhatsApp:</strong> +57 3207417349</p>
          <p><strong>E-mail:</strong> hi@spanishwithcriss.com</p>
          {/* <p dangerouslySetInnerHTML={{ __html: author.node.shortBio.childMarkdownRemark.html }}></p> */}
        </div>
      </Layout>
    )
  }
}

export default ClassPage

export const pageQuery = graphql`
  query Classes {
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          shortBio {
            childMarkdownRemark {
              html
            }
          }
          title
        }
      }
    }
  }
`