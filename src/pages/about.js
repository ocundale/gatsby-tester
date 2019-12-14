import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Layout } from '../components/style/layout.styled'

class AboutPage extends React.Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    return (
      <Layout location={this.props.location} >
        <div className="wrapper">
          <h2 className="section-headline">About Me</h2>
          <p dangerouslySetInnerHTML={{ __html: author.node.shortBio.childMarkdownRemark.html }}></p>
        </div>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
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