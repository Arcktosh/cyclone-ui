import { ComponentStory, ComponentMeta } from "@storybook/react"
import Alert from "./Alert"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: "Hello world!",
  bgColor: "info",
  iconOn: true,
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  title: "Click me!",
  description: "This is a description",
  iconOn: true,
  children: <button className="btn btn-sm btn-ghost">Deny</button>,
}
