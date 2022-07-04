import { ComponentStory, ComponentMeta } from "@storybook/react"
import Progress from "./Progress"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
)

export const Base = Template.bind({})
Base.args = {
  width: "56",
  value: 10,
}

export const SuccessColor = Template.bind({})
SuccessColor.args = {
  color: "success",
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  indeterminate: true,
}
