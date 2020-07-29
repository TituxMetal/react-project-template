import { createGlobalStyle } from 'styled-components'

import LatoBlack from './Lato-Black.ttf'
import LatoBlackItalic from './Lato-BlackItalic.ttf'
import LatoBold from './Lato-Bold.ttf'
import LatoBoldItalic from './Lato-BoldItalic.ttf'
import LatoItalic from './Lato-Italic.ttf'
import LatoLight from './Lato-Light.ttf'
import LatoLightItalic from './Lato-LightItalic.ttf'
import LatoRegular from './Lato-Regular.ttf'
import LatoThin from './Lato-Thin.ttf'
import LatoThinItalic from './Lato-ThinItalic.ttf'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Lato Thin';
    font-style: normal;
    font-weight: 200;
    src: local('Lato Thin'), local('Lato-Thin'),
      url(${LatoThin}) format('truetype');
  }
  @font-face {
    font-family: 'Lato Thin Italic';
    font-style: italic;
    font-weight: 200;
    src: local('Lato Thin Italic'), local('Lato-ThinItalic'),
      url(${LatoThinItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Lato Black';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Black'), local('Lato-Black'),
      url(${LatoBlack}) format('truetype');
  }
  @font-face {
    font-family: 'Lato Black Italic';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Black Italic'), local('Lato-BlackItalic'),
      url(${LatoBlackItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Lato Light';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'),
      url(${LatoLight}) format('truetype');
  }
  @font-face {
    font-family: 'Lato Light Italic';
    font-style: italic;
    font-weight: 300;
    src: local('Lato Light Italic'), local('Lato-LightItalic'),
      url(${LatoLightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'),
      url(${LatoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'),
      url(${LatoItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'),
      url(${LatoBold}) format('truetype');
  }
  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
      url(${LatoBoldItalic}) format('truetype');
  }
`

export default GlobalFonts
