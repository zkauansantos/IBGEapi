import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Montserrat, sans-serif;
    }

    body {
        background: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.textColor};
    }

    button {
        cursor: pointer;
    }

    span {
      color: ${({ theme }) => theme.textColor === '#e9f2f9' ? '#FED049' : '#5F8D4E'};
    };

    p {
      @media screen and (max-width:450px) {
        font-size: 14px;
      }
    }
`;
