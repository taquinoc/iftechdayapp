import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

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
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                </S.ProfileAuthor>
                <S.ProfilePosition>
                    {position}
                </S.ProfilePosition>
                <S.ProfileDescription>
                    {description}
                </S.ProfileDescription>
            </S.ProfileLink>
            <h3>{author}</h3>
            <p></p>
        </ S.ProfileWrapper>
    )
}

export default Profile