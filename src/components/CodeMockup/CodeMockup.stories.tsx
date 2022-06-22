import { ComponentStory, ComponentMeta } from "@storybook/react"
import CodeMockup from "./CodeMockup"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Mockup/CodeMockup",
  component: CodeMockup,
} as ComponentMeta<typeof CodeMockup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CodeMockup> = (args) => (
  <CodeMockup {...args} />
)

export const CodeWithLinePrefix = Template.bind({})
CodeWithLinePrefix.args = {
  code: [{ code: "npm i", prefix: "$", class: "text-info" }],
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  code: [
    { code: "npm i", prefix: "$", class: "text-info" },
    { code: "installing...", prefix: ">", class: "text-warning" },
    { code: "Done!", prefix: ">", class: "text-success" },
  ],
}
export const Colors = Template.bind({})
Colors.args = {
  code: [
    { code: "npm i", prefix: "$", class: "text-info" },
    { code: "installing...", prefix: ">", class: "text-warning" },
    { code: "Done!", prefix: ">", class: "text-success" },
  ],
  bgColor: "primary",
}
