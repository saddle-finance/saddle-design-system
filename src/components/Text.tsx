/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import React, { ReactElement } from "react"
import styled from "styled-components"

type StyledProps = {
  // TODO: Why doesn't this enum work? "no overload matches this call"
  // size?: ".75em" | "1em" | "1.25em"
  size?: string
}
const TextComponent = styled.span<StyledProps>`
  font-family: "Source Code Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.size};
  size: unset;
`

type Props = {
  size?: "sm" | "md" | "lg"
}
export default function Text(
  props: React.PropsWithChildren<Props>,
): ReactElement {
  const { size = "md", children } = props

  let sizeVal
  switch (size) {
    case "sm":
      sizeVal = ".75em"
      break
    case "md":
      sizeVal = "1em"
      break
    case "lg":
      sizeVal = "1.25em"
      break
  }

  return <TextComponent size={sizeVal}>{children}</TextComponent>
}
