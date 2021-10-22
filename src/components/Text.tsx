/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { Text as _Text, useThemeUI, get } from 'theme-ui'

// TODO: Import Typography props as well?  Or merge sx object?
interface TextProps {
  size?: "sm" | "md" | "lg",
  children: ReactChild
}

const Text = ({ size, children }: TextProps) => {
  const context = useThemeUI()
  const styles = get(context.theme, `text.${size}`)

  return <_Text sx={styles}>{ children }</_Text>
}

Text.defaultProps = {
  size: "md"
}

export default Text
export type { TextProps }