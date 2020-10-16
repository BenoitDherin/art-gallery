import React from "react"
import { graphql, Link } from 'gatsby'

import PropTypes from 'prop-types'
import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/layout'

const About = ({ data }) => {
  const { allFile: { nodes } } = data

  return (
    <Layout>
      <div className="about-content-container">
        <h1>About This Site</h1>
        <p>This site was created using <a href="https://github.com/doubledherin/gatsby-p5-starter" target="_blank" rel="noreferrer">this Gatsby starter</a> built by <a href="https://github.com/doubledherin">my wife Wendy</a>.</p>
        <h1>About Me</h1>
        { data && nodes && <Img className="round" fluid={ nodes[0].childImageSharp.fluid } /> }
        <p>My name is Benoit Dherin.</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {relativePath: {regex: "/static/images/about/"}}) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }  
`

About.propTypes = {
  data: PropTypes.object
}

export default About