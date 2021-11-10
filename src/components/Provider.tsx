/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { ThemeProvider } from 'theme-ui'

import theme from "../themes/theme"
import Global from '../components/Global'

interface ProviderProps {
  children: ReactChild
}

const Provider = ({ children }: ProviderProps) => (
    <ThemeProvider theme={theme}>
      <Global />
      { children }
    </ThemeProvider>
)

export default Provider
export type { ProviderProps }