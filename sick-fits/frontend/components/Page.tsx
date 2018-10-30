import * as React from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, createGlobalStyle } from './styled-components';

const theme = {
  black: '#393939',
  lightgrey: '#E1E1E1',
  red: '#FF0000',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  offWhite: '#EDEDED',
  maxWidth: '1000px'
};

const Global = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing:border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;

const StyledPage = styled.div`
  color: ${props => props.theme.black};
  background: white;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Global theme={theme} />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
