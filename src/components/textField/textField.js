import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import {
  electricBlue,
  dusk,
  white,
  redPink,
  dark,
} from '../../constants/theme';

// use helperText prop for display error status

export const StyledTextField = styled(TextField)`
  width: ${({ width = '100%' }) => width};
  max-width: 400px;

  input {
    color: ${dark};
    font-family: 'MaisonNeue-Book';
    font-size: 16px;
    padding: 13px;
    background: ${white};
    border-radius: 0px;
    line-height: 4.3rem;
    &::placeholder {
      padding: 16px 0;
      width: 279px;
      height: 27px;
      opacity: 0.75;
      font-size: 14px;
      letter-spacing: normal;
      color: ${dusk};
    }
    &:focus {
      ::placeholder {
        color: transparent;
      }
    }
  }
  input::placeholder {
    line-height: normal !important;
  }

  div:first-child {
    margin: 0 !important;
  }

  && {
    > div {
      margin-top: 0;
    }
    div::after {
      border-bottom: 2px solid ${({ error }) => (error ? 'red' : white)};
    }
    div::before {
      border-color: ${electricBlue}!important;
      border-bottom: none;
    }
    p {
      font-size: 1.3em;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: 0.3px;
      color: ${({ error }) => (error ? redPink : 'inherit')};
    }
  }

  label,
  label.focused {
    display: none;
  }
`;

export const BlueTextField = styled(StyledTextField)`
  width: ${({ width = '100%' }) => width};

  input {
    color: ${white};
    background: ${electricBlue};
    font-family: 'MaisonNeue-Book';
    border-radius: 0px;
    &::placeholder {
      color: ${white};
      font-family: 'MaisonNeue-Demi';
      font-size: 14px;
      opacity: 1;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
    }
  }
`;
