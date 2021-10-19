import React from "react"
import { ThemeProvider } from 'styled-components'

import base from "../src/themes/base"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={base}>
      <Story />
    </ThemeProvider>
  ),
];