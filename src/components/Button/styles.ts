import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.tag : colors.text)};
  color: ${colors.text};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.tag : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.text};
  color: ${colors.text};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`
