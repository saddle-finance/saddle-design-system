/** @jsxImportSource theme-ui */
import { ReactChild } from 'react'
import { Button as _Button, useThemeUI, get } from 'theme-ui'

type Kind = "primary" | "secondary"
type Size = "sm" | "md" | "lg"
interface ButtonProps {
  kind?: Kind,
  size?: Size,
  children: ReactChild
}

const Button = ({ size = "md", kind = "primary", children }: ButtonProps) => {
  const context = useThemeUI()
  const sizes = get(context.theme, `button.${size}`)
  const kinds = get(context.theme, `button.${kind}`)

  return <_Button sx={{ ...sizes, ...kinds }}>{ children }</_Button>
}

export default Button
export type { ButtonProps }