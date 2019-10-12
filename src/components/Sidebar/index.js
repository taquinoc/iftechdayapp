import React from 'react'
import Profile from '../Profile'

import * as S from './styled'

//Um container para segurar todas as informações, no caso o Profile0000
const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
    </S.SidebarWrapper>
)

export default Sidebar