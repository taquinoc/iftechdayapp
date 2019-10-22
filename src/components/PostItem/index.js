import React from "react"

import { Notifications as Notify } from "styled-icons/material/Notifications"
import { NotificationsOff as NotifyDisabled } from "styled-icons/material/NotificationsOff"
import { NotificationsActive as NotifyActive } from "styled-icons/material/NotificationsActive"

import * as S from "./styled"

const PostItem = () => (
  <S.PostItemLink to="/slug/">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>22 de Outubro de 2019 • 4 min de leitura</S.PostItemDate>
        <S.PostItemTitle>
          Bem-vindo ao IF TECH 2020
        </S.PostItemTitle>
        <S.PostItemDescription>
          Aqui você pode olhar tudo que tem no IF TECH 2020
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
    <S.PostItemIcon>
      <Notify />
      <NotifyDisabled />
      <NotifyActive />
    </S.PostItemIcon>
  </S.PostItemLink>
)

export default PostItem