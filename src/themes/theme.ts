import { Theme } from 'theme-ui'

import base from './base'
import text from './text'
import button from './button'

interface ThemeWithVariants extends Theme {
  text: any
}

const theme: ThemeWithVariants = {
  ...base,
  ...text,
  ...button
}

export default theme
