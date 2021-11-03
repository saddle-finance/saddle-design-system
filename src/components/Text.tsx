/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { Text as _Text, useThemeUI, get } from 'theme-ui'

// TODO: Import Typography props as well?  Or merge sx object?
interface TextProps {
  kind?: "nav1" | "nav1b" | "nav2" | "body2" | "error1" | "technical1" | "h1" | "h3",
  children: ReactChild
}

const Text = ({ kind, children }: TextProps) => {
  const context = useThemeUI()
  const kinds = get(context.theme, `text.${kind}`)

  return <_Text sx={{ ...kinds, color: 'text' }}>{ children }</_Text>
}

Text.defaultProps = {
  kind: "body2"
}

export default Text
export type { TextProps }