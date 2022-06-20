import { ComponentStory, ComponentMeta } from "@storybook/react"
import CodeMockup from "./CodeMockup"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Mockup/CodeMockup",
  component: CodeMockup,
} as ComponentMeta<typeof CodeMockup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CodeMockup> = (args) => <CodeMockup {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: "Click me!",
}
