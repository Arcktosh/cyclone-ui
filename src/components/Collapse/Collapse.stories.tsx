import { ComponentStory, ComponentMeta } from "@storybook/react"
import Collapse from "./Collapse"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
)

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: "Hello world!",
  content: "More on the content",
}
export const Icon1 = Template.bind({})
Icon1.args = {
  title: "Click me!",
  icon: { arrow: true },
  content: "More on the content",
}
export const Icon2 = Template.bind({})
Icon2.args = {
  title: "Click me!",
  icon: { plus: true },
  content: "More on the content",
}
export const forceOpen = Template.bind({})
forceOpen.args = {
  title: "Title",
  forceOpen: true,
  content: "I'm Always Open",
}
export const BackgroundColor = Template.bind({})
BackgroundColor.args = {
  title: "Click me!",
  bgColor: "primary",
  content: "More on the content",
}
export const ColorChange = Template.bind({})
ColorChange.args = {
  title: "Click me!",
  bgColor: "primary",
  content: "More on the content",
  focusColor: "secondary",
}
