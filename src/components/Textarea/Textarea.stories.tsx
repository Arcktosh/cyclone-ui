import { ComponentStory, ComponentMeta } from "@storybook/react"
import Textarea from "./Textarea"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataInput/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
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
