import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Profile = () => (
    <StaticQuery 
        query={graphql`
    query MySiteMetadata {
        site {
            siteMetadata {
                title
                description
                author
                position
    }   
  }
}`}
    render ={({site: {siteMetadata: {title, position, description, author}}}) => ( 
        <div className="Profile-wrapper">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <h2>{position}</h2>
        <h3>{author}</h3>
        <p></p>
        </div>
    )}
    />
);

export default Profile