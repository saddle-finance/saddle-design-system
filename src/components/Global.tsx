/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { Global as _Global, css } from '@emotion/react'

import { NoeDisplay, SourceCodePro } from '../css/fonts.js'

interface GlobalProps {
  styles?: any
}
const fonts = css`
  ${NoeDisplay};
  ${SourceCodePro};
`

const Global = ({ styles }: GlobalProps) => {
  const globalStyles = css`
    ${fonts};
    ${styles};
  `

  return <_Global {...globalStyles} />
}

export default Global