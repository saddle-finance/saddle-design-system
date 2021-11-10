/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { useThemeUI, get, Theme } from 'theme-ui'

interface BackgroundProps {
  children: ReactChild
}

// TODO: The StylePropertyValue Type doesn't seem to like 'position' on pseudoelements?
const backgroundRules = {
  height: '100%',
  width: '100%',
  position: 'relative',
  background: 'purple',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: '50%',
    background: (theme: Theme) => `linear-gradient(180deg, ${theme?.colors?.backgroundGradient1} 49.48%, ${theme?.colors?.backgroundGradient2} 100%)`
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    background: (theme: Theme) => `radial-gradient(52.5% 52.5% at 50% 4.9%, ${theme?.colors?.backgroundGradient3} 0%, ${theme?.colors?.backgroundGradient4} 100%);`
  }
}

const Background = ({ children }: BackgroundProps) => {
  return <div sx={{ ...backgroundRules }}>{ children }</div>
}

export default Background
export type { BackgroundProps }