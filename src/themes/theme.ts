import { Theme } from 'theme-ui'

import base from './base'
import text from './text'
import button from './button'

const theme: Theme = {
  ...base,
  ...text,
  ...button
}

export default theme
