import React from "react"
import PropTypes from 'prop-types'

import { Notifications as Notify } from "styled-icons/material/Notifications"
import { NotificationsOff as NotifyDisabled } from "styled-icons/material/NotificationsOff"
import { NotificationsActive as NotifyActive } from "styled-icons/material/NotificationsActive"

import * as S from "./styled"

//Recebimento de propriedades e quais são obrigatórias ou não, é necessário definir
const PostItem = ({ slug, background, category, date, timeToRead, title, description }) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} </S.PostItemDate>
        <S.PostItemTitle>
          {title}
        </S.PostItemTitle>
        <S.PostItemDescription>
          {description}
        </S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
    <S.PostItemIcon>
      <Notify title="Ativar notificação" />
      <NotifyDisabled title="Desativar notificação" />
      <NotifyActive title="Notificação Ativa" />
    </S.PostItemIcon>
  </S.PostItemLink>
)

//Definição dos tipos das propriedades
PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem