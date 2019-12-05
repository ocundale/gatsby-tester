import styled from 'styled-components';
import { purple } from '../../constants/theme';
// import MEDIA from '../../helpers/mediaTemplates';

export const Header = styled.header`
  h1 {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
     -ms-animation: fadein 2s; /* Internet Explorer */
      -o-animation: fadein 2s; /* Opera < 12.1 */
         animation: fadein 2s;
    color:${purple};
    font-weight: bold;
    font-size: 2.5em;
    text-align: left;
    margin-top: 39px;
    margin-left:30px;
  }
  nav {
    ul {
      -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein 2s; /* Firefox < 16 */
       -ms-animation: fadein 2s; /* Internet Explorer */
        -o-animation: fadein 2s; /* Opera < 12.1 */
           animation: fadein 2s;
      display: flex;
      justify-content: center;
      list-style: none;
      margin-top: 20px;
      height: 15vh;
      max-height: 100px;
      width: 310px;
      float: right;
      li {
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        margin: 0 1em;
        a {
          font-family: Kalam;
          color:${purple};
          :hover {
            color: #C700BB;
          }
        }
      }
    }
  }


  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`;
