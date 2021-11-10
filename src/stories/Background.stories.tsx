/** @jsxImportSource theme-ui */
import { Story, Meta } from "@storybook/react"

import Background, { BackgroundProps } from "../components/Background"
import ModeToggle from '../components/ModeToggle'

export default {
  title: "Background",
  component: Background
} as Meta

const Template: Story<BackgroundProps> = (args) => (
  <div sx={{height: '400px', width: '200px'}}>
    <ModeToggle />
    <Background>
      <span />
    </Background>
  </div>
)

export const Default = Template.bind({})