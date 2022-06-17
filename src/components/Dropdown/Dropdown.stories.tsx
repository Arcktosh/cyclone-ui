import { ComponentStory, ComponentMeta } from "@storybook/react"
import Dropdown from "./Dropdown"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Actions/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: "Click me!",
}
