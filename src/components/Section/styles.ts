import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'mainBackground'
      ? colors.mainBackground
      : colors.secondaryBackground};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'mainBackground'
        ? colors.secondaryBackground
        : colors.mainBackground};
  }

  p {
    max-width: 640px;
    font-size: 14px;
    line-height: 22px;

    span {
      font-weight: bold;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`
