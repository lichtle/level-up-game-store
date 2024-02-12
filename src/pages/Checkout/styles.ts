import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  aling-items: flex-end;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

// A propriedade "flex: auto" abaixo faz com que os elementos sejam distribuídos igualmente, com a mesma largura
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.text};
    border: 1px solid ${colors.text};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 3px solid red;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.tag : colors.mainBackground};
  color: ${colors.text};
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 8px;
    width: 100%;
  }
`
