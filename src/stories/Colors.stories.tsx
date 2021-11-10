/** @jsxImportSource theme-ui */
import { Story, Meta } from "@storybook/react"

import Color, { ColorProps } from './example-components/Color'

export default {
  title: "Colors",
  component: Color,
  parameters: { controls: { include: ['kind']}}
} as Meta

const Template: Story<ColorProps> = (args) => (
  <Color {...args} />
)

export const Indigo = Template.bind({})
Indigo.args = {
  kind: "indigo"
}

export const seafoam = Template.bind({})
seafoam.args = {
  kind: "seafoam"
}

export const sunburn = Template.bind({})
sunburn.args = {
  kind: "sunburn"
}

export const gold = Template.bind({})
gold.args = {
  kind: "gold"
}

export const white = Template.bind({})
white.args = {
  kind: "white"
}

export const grey75 = Template.bind({})
grey75.args = {
  kind: "grey75"
}

export const grey50 = Template.bind({})
grey50.args = {
  kind: "grey50"
}

export const grey25 = Template.bind({})
grey25.args = {
  kind: "grey25"
}

export const gray5 = Template.bind({})
gray5.args = {
  kind: "gray5"
}

export const gray1 = Template.bind({})
gray1.args = {
  kind: "gray1"
}

export const indigo2 = Template.bind({})
indigo2.args = {
  kind: "indigo2"
}

export const indigo3 = Template.bind({})
indigo3.args = {
  kind: "indigo3"
}

export const indigo4 = Template.bind({})
indigo4.args = {
  kind: "indigo4"
}

export const seafoam2 = Template.bind({})
seafoam2.args = {
  kind: "seafoam2"
}

export const sunset = Template.bind({})
sunset.args = {
  kind: "sunset"
}

export const sand1 = Template.bind({})
sand1.args = {
  kind: "sand1"
}

export const sand2 = Template.bind({})
sand2.args = {
  kind: "sand2"
}

export const sand3 = Template.bind({})
sand3.args = {
  kind: "sand3"
}

export const gold1 = Template.bind({})
gold1.args = {
  kind: "gold1"
}

export const gold2 = Template.bind({})
gold2.args = {
  kind: "gold2"
}

export const cherry1 = Template.bind({})
cherry1.args = {
  kind: "cherry1"
}

export const cherry2 = Template.bind({})
cherry2.args = {
  kind: "cherry2"
}