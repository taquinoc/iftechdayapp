import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = () => {

    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: {eq: "gatsby-astronaut.png"}){
                    childImageSharp {
                        fixed(width: 60, height: 60){
                            ...GatsbyImageSharpFixed
                        }
                        fluid(maxWidth: 60, maxHeight: 60){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        
        `
    )

    return <Img fluid={avatarImage.childImageSharp.fluid} />
}

export default Avatar;