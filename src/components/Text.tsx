import styled from "styled-components"
import { variant, compose, typography, TypographyProps } from "styled-system"

interface TextProps extends TypographyProps {
  size?: "sm" | "md" | "lg"
}

const variants = variant({
  prop: "size",
  variants: {
    sm: {
      fontSize: 0,
      lineHeight: 0
    },
    md: {
      fontSize: 1,
      lineHeight: 1
    },
    lg: {
      fontSize: 2,
      lineHeight: 2
    },
  }
})

const textStyles = compose(typography, variants)

const Text = styled.span<TextProps>(textStyles)

Text.defaultProps = {
  size: "md"
}

// NB: We can forgo the "variants" like so:
// const Text = styled.span<TypographyProps>`
//   ${typography}
// `
// Text.defaultProps = {
//   fontFamily: "sansSerif",
//   fontSize: 1
// }

export default Text