/** @jsxImportSource theme-ui */
import { useThemeUI, get } from 'theme-ui'

import Text from '../../components/Text'

interface ColorProps {
  kind?: "indigo" | "seafoam" | "sunburn" | "gold" | "white" | "black" | "grey75" | "grey50" | "grey25" | "gray5" | "gray1" | "indigo2" | "indigo3" | "indigo4" | "seafoam2" | "sunset" | "sunburn" | "sand1" | "sand2" | "sand3" | "gold1" | "gold2" | "cherry1" | "cherry2"
}

const Color = ({ kind }: ColorProps) => {
  const context = useThemeUI()
  const color = get(context.theme, `colors.${kind}`)
  
  const computedStyle = getComputedStyle(document.body)
  const styleVar = color.substring(
    color.indexOf("(") + 1, 
    color.lastIndexOf(")")
  )
  const hexVal = computedStyle.getPropertyValue(styleVar)

  const boxRules = {
    height: '100px',
    width: '100px'
  }

  return (
    <div>
      <Text kind="nav1">{hexVal}</Text>
      <div sx={{ ...boxRules, bg: color }} />
    </div>
  )
}

export default Color
export type { ColorProps }