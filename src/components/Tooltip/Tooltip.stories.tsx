import { ComponentStory, ComponentMeta } from "@storybook/react"
import Tooltip from "./Tooltip"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: "Click me!",
}
