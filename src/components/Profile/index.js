import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

const Profile = () => {
    const {
        site: {
            siteMetadata: { title, position, description, author }
        }
    } = useStaticQuery(graphql`
    query MySiteMetadata {
        site {
            siteMetadata {
                title
                description
                author
                position
            }   
        }
    }
`)

    return (
        <div className="Profile-wrapper">
            <Avatar />
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h2>{position}</h2>
            <h3>{author}</h3>
            <p></p>
        </div>
    )
}

export default Profile