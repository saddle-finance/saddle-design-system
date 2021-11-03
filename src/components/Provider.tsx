/** @jsxImportSource theme-ui */
import { ReactChild, useState, useContext, createContext, useEffect } from 'react'
import { ThemeProvider, useThemeUI, get, useColorMode } from 'theme-ui'

import theme from "../themes/theme"
import Global from '../components/Global'

interface ProviderProps {
  children: ReactChild
}

interface AppWrapperProps {
  children: ReactChild
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const [colorMode, setColorMode] = useColorMode()
  
  const handler = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }

  return (
    <div sx={theme => ({bg: 'background', p: 4})} onClick={handler}>
      { children }
    </div>
  )
}

const Provider = ({ children }: ProviderProps) => (
    <ThemeProvider theme={theme}>
      <Global />
      <AppWrapper>
        { children }
      </AppWrapper>
    </ThemeProvider>
)

export default Provider
export type { ProviderProps }