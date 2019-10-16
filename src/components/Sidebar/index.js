import React from 'react'
import Profile from '../Profile'
import SocialLinks from "../SocialLinks"

import * as S from './styled'

//Um container para segurar todas as informações, no caso o Profile0000
const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <SocialLinks />
    </S.SidebarWrapper>
)

export default Sidebar