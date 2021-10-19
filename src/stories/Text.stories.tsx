import React, { ReactElement } from "react"
import { ThemeProvider } from 'styled-components'

import base from "../themes/base"
import Text from "../components/Text"

export const TextStory = (): ReactElement => (
  <ThemeProvider theme={base}>
    <div>
      <Text size="lg">Large Text</Text>
    </div>
    <div>
      <Text size="md">Medium Text (default)</Text>
    </div>
    <div>
      <Text size="sm">Small Text</Text>
    </div>
  </ThemeProvider>
)

export default {
  title: "Text",
  component: TextStory,
}
