import { Theme } from '../types/layouts'

const paletteLight = {
  PRIMARY_COLOR: '#228B22',
  SECTION_BACKGROUND: '#FFFFF',
  TEXT_COLOR: '#00000',
  TEXT_READ_ONLY: '#7F7F7F',
  TEXT_DISABLE: '#D6D6D6',
  TEXT_LINK: '#037AFF',
  OVERLAY: '#00000033',
  APP_BACKGROUND: '#EBEBEB',
  KEYBOARD_BACKGROUND: '#D3D7DE',
}

const paletteDark = {
  PRIMARY_COLOR: '#66AA68',
  SECTION_BACKGROUND: '#363434',
  TEXT_COLOR: '#FFFFFF',
  TEXT_READ_ONLY: '#ADB0B2',
  TEXT_DISABLE: '#5C6166',
  TEXT_LINK: '#529EFF',
  OVERLAY: '#00000099',
  APP_BACKGROUND: '#292929',
  KEYBOARD_BACKGROUND: '#202020',
}

export const palette = (theme: Theme) => {
  if (theme === 'light') {
    return paletteLight
  } else {
    return paletteDark
  }
}
