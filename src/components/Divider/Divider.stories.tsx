import { ComponentStory, ComponentMeta } from "@storybook/react"
import Divider from "./Divider"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Layout/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Base = Template.bind({})
Base.args = {
  text: "Hello world!",
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  text: "Click me!",
  isHorizontal: true,
}
