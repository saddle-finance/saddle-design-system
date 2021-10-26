/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'

import theme from "../src/themes/theme"
import Global from '../src/components/Global'

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
    <ThemeProvider theme={theme}>
      <Global />
      <Story />
    </ThemeProvider>
  ),
];