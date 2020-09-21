import { createGlobalStyle } from 'styled-components'

import LatoBlack from '~/static/fonts/Lato-Black.ttf'
import LatoBlackItalic from '~/static/fonts/Lato-BlackItalic.ttf'
import LatoBold from '~/static/fonts/Lato-Bold.ttf'
import LatoBoldItalic from '~/static/fonts/Lato-BoldItalic.ttf'
import LatoItalic from '~/static/fonts/Lato-Italic.ttf'
import LatoLight from '~/static/fonts/Lato-Light.ttf'
import LatoLightItalic from '~/static/fonts/Lato-LightItalic.ttf'
import LatoRegular from '~/static/fonts/Lato-Regular.ttf'
import LatoThin from '~/static/fonts/Lato-Thin.ttf'
import LatoThinItalic from '~/static/fonts/Lato-ThinItalic.ttf'

export const GlobalFonts = createGlobalStyle`
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
