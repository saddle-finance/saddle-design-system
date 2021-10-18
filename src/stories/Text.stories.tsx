// TODO: replace with styled-components
// import "../styles/global.scss"

import React, { ReactElement } from "react"

import Text from "../components/Text"

export const TextStory = (): ReactElement => (
  <>
    <div>
      <Text size="lg">Large Text</Text>
    </div>
    <div>
      <Text size="md">Medium Text (default)</Text>
    </div>
    <div>
      <Text size="sm">Small Text</Text>
    </div>
  </>
)

export default {
  title: "Text",
  component: TextStory,
}
