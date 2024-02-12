import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'
import { Props } from '.'
import { Card } from '../Product/styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'games' | 'isLoading'>
>`
  padding: 50px 0;
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
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 28px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
`
