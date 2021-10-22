/** @jsxImportSource theme-ui */
import { Story, Meta } from "@storybook/react"

import Text, { TextProps } from "../components/Text"

export default {
  title: "Text",
  component: Text,
  parameters: { controls: { include: ['size']}}
} as Meta

const Template: Story<TextProps> = (args) => (
  <Text {...args}>Hello, World!</Text>
)

export const Default = Template.bind({})

export const Large = Template.bind({})
Large.args = {
  size: "lg"
}

export const Medium = Template.bind({})
Medium.args = {
  size: "md"
}

export const Small = Template.bind({})
Small.args = {
  size: "sm"
}