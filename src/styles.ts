import { createGlobalStyle } from 'styled-components'

export const colors = {
  text: '#eee',
  tag: '#0097B2',
  mainBackground: '#111',
  secondaryBackground: '#333',
  footerText: '#a3a3a3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.mainBackground};
    color: ${colors.text};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width:${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
