import styled from "styled-components"
import { variant, compose, typography, TypographyProps } from "styled-system"

// NB: We can include all Typography props if we prefer
// interface TextProps extends TypographyProps {
//   size?: "sm" | "md" | "lg"
// }
interface TextProps {
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

// Compose all typography styles w/ our variants if we prefer
// const textStyles = compose(typography, variants)
// const Text = styled.span<TextProps>(textStyles)
const Text = styled.span<TextProps>(variants)

Text.defaultProps = {
  size: "md"
}

// NB: OR we can also forgo the "variants" like so:
// const Text = styled.span<TypographyProps>`
//   ${typography}
// `
// Text.defaultProps = {
//   fontFamily: "sansSerif",
//   fontSize: 1
// }

export default Text
export type { TextProps }