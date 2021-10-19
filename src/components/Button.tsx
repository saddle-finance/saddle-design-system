import styled from "styled-components"
import { variant, system, compose } from "styled-system"

type Kind = "primary" | "secondary"
type Size = "sm" | "md" | "lg"
interface ButtonProps {
  kind?: Kind,
  size?: Size
}

const kinds = variant({
  prop: "kind",
  variants: {
    primary: {
      bg: 'primary'
    },
    secondary: {
      bg: 'secondary'
    }
  }
})

const sizes = variant({
  prop: "size",
  variants: {
    sm: {
      fontSize: 0
    },
    md: {
      fontSize: 1
    },
    lg: {
      fontSize: 2
    },
  }
})

const Button = styled.button<ButtonProps>(
  kinds,
  sizes
)

Button.defaultProps = {
  kind: "primary",
  size: "md"
}

export default Button
export type { ButtonProps }