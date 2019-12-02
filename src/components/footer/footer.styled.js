import styled from 'styled-components';
import { white, dark, purple } from '../../constants/theme';
import MEDIA from '../../helpers/mediaTemplates';

export const Footer = styled.footer`
  color: ${dark};
  font-size:12px;
  text-align:center;
  display: flex;
  z-index: 1000;
  background-color: ${white};
  align-items: center;
  padding: 2em 3em 1em 3em;

  ${MEDIA.TABLET`
    svg {
      margin: 0;
    }
    h4 {
      padding-top: 2em;
    }
  `}
  ${MEDIA.PHONE`
    padding: 0em 1em 1em 2em;
  `}

  // Bottom set of Links:
  .bottom-links {
    margin: auto;
    justify-content: space-between;
    display: flex;
    list-style:none;
    max-width: 53rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    li {
      margin: 0.5em 0;
      a {
        svg {
          fill: ${purple};
          width: 35px;
          height: 35px;
        }
        :hover svg {
          fill: #C700BB;
        }
      }
    }
  }

  // Other link sets:
  // ul {
  //   li {
  //     font-family: 'MaisonNeue-Book';
  //     font-size: 16px;
  //     font-weight: normal;
  //     font-stretch: normal;
  //     font-style: normal;
  //     line-height: 2.13;
  //     letter-spacing: normal;
  //     color: #ffffff;
  //     a {
  //       text-decoration: none;
  //       color: ${white};
  //     }
  //   }
  // }

  ${MEDIA.PHONE`
  .bottom-links {
      flex-direction: column;
  }

  `};
`;
