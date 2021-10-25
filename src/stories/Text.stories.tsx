/** @jsxImportSource theme-ui */
import { Story, Meta } from "@storybook/react"
import { Themed } from 'theme-ui'

import Text, { TextProps } from "../components/Text"

export default {
  title: "Text",
  component: Text,
  parameters: { controls: { include: ['kind']}}
} as Meta

const Template: Story<TextProps> = (args) => (
  <Text {...args}>Hello, World!</Text>
)

export const Default = Template.bind({})

export const H1 = Template.bind({})
H1.args = {
  kind: "h1"
}

export const H3 = Template.bind({})
H3.args = {
  kind: "h3"
}

export const Nav1 = Template.bind({})
Nav1.args = {
  kind: "nav1"
}

export const Nav1b = Template.bind({})
Nav1b.args = {
  kind: "nav1b"
}

export const Nav2 = Template.bind({})
Nav2.args = {
  kind: "nav2"
}

export const Body2 = Template.bind({})
Body2.args = {
  kind: "body2"
}

export const Error1 = Template.bind({})
Error1.args = {
  kind: "error1"
}

export const Technical1 = Template.bind({})
Technical1.args = {
  kind: "technical1"
}