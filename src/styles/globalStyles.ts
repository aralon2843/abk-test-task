import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    *, input {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.light};
  }
  ul {
    list-style: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  
  form, input {
    font-family: inherit;
    font-size: inherit;
  }
`;
export default GlobalStyles;
