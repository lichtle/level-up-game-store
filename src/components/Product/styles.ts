import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${colors.text};
  background-color: ${colors.secondaryBackground};
  padding: 8px;
  border-radius: 8px;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin: 16px 0 8px;
`

export const Description = styled.p`
  displa: block;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
