/** @jsxImportSource theme-ui */
import { useEffect, useState } from 'react'
import { useThemeUI, get } from 'theme-ui'

import Text from '../../components/Text'

interface ColorProps {
  kind?: "indigo" | "seafoam" | "sunburn" | "gold" | "white" | "black" | "grey75" | "grey50" | "grey25" | "gray5" | "gray1" | "indigo2" | "indigo3" | "indigo4" | "seafoam2" | "sunset" | "sunburn" | "sand1" | "sand2" | "sand3" | "gold1" | "gold2" | "cherry1" | "cherry2"
}

const Color = ({ kind }: ColorProps) => {
  const context = useThemeUI()
  const color = get(context.theme, `colors.${kind}`)

  // NOTE: This is required if using CSS Custom Properties
  // const [ hexVal, setHexVal ] = useState('')
  // const [ color, setColor ] = useState()
  // useEffect(() => {
  //   const fetchedColor = get(context.theme, `colors.${kind}`)
  //   const computedStyle = getComputedStyle(document.body)
  //   const styleVar = fetchedColor.substring(
  //     fetchedColor.indexOf("(") + 1,
  //     fetchedColor.lastIndexOf(")")
  //   )

  //   setColor(fetchedColor)
  //   setHexVal(computedStyle.getPropertyValue(styleVar))
  // }, [])

  const boxRules = {
    height: '100px',
    width: '100px'
  }

  return (
    <div>
      <Text kind="nav1">{color || ''}</Text>
      { color
        ? <div sx={{ ...boxRules, bg: color }} />
        : null
      }
    </div>
  )
}

export default Color
export type { ColorProps }