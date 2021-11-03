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

const Button = ({ size, kind, children }: ButtonProps) => {
  const context = useThemeUI()
  const sizes = get(context.theme, `buttons.${size}`)
  const kinds = get(context.theme, `buttons.${kind}`)

  return <_Button sx={{ ...sizes, ...kinds }}>{ children }</_Button>
}

Button.defaultProps = {
  kind: "primary",
  size: "md"
}

export default Button
export type { ButtonProps }