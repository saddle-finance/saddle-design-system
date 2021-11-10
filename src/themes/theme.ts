import { Theme, merge } from 'theme-ui'

// Base
import base from './base'
// Components
import text from './text'
import buttons from './button'
// Modes
import light from './modes/light'
import dark from './modes/dark'

interface ThemeWithVariants extends Theme {
  text: any,
  colors: any,
  buttons: any
}

const theme: ThemeWithVariants = {
  config: {
    initialColorModeName: 'light',
    useCustomProperties: false
  },
  ...base,
  colors: {
    ...base.colors,
    modes: {
      dark,
      light
    }
  },
  ...text,
  ...buttons
}

console.log("THEME: ", theme)

export default theme
