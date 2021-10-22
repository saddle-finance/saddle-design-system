/** @jsxImportSource theme-ui */
import { Story, Meta } from "@storybook/react"

import Button, { ButtonProps } from "../components/Button"

export default {
  title: "Button",
  component: Button,
  parameters: { controls: { include: ['size', 'kind']}}
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Hello, World!</Button>
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

export const Primary = Template.bind({})
Primary.args = {
  kind: "primary"
}

export const Secondary = Template.bind({})
Secondary.args = {
  kind: "secondary"
}