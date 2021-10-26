/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { Text as _Text, useThemeUI, get } from 'theme-ui'

// I can't find any type definitions for sx or "Theme-Aware Properties"
// Is there a good way to pass down arbitrary style values?
interface TextProps {
  kind?: "nav1" | "nav1b" | "nav2" | "body2" | "error1" | "technical1" | "h1" | "h3",
  capitalize?: boolean,
  children: ReactChild | string | undefined
}

const Text = ({ kind = "body2", children, capitalize }: TextProps) => {
  const context = useThemeUI()
  const kinds = get(context.theme, `text.${kind}`)

  const sx = {
    ...kinds
  }

  if (capitalize) {
    sx.textTransform = "capitalize"
  }

  return <_Text sx={{ ...sx }}>{ children }</_Text>
}

export default Text
export type { TextProps }