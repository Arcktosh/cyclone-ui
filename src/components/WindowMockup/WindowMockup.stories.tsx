import { ComponentStory, ComponentMeta } from "@storybook/react"
import WindowMockup from "./WindowMockup"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Mockup/WindowMockup",
  component: WindowMockup,
} as ComponentMeta<typeof WindowMockup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WindowMockup> = (args) => (
  <WindowMockup {...args} />
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
