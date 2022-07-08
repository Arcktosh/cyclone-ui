import { ComponentStory, ComponentMeta } from "@storybook/react"
import Radio from "./Radio"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataInput/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  onChange: (e) => console.log(e.target.value),
}
export const Color = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Color.args = {
  color: "secondary",
  checkedColor: "accent",
}
export const Disabled = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  disabled: true,
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: "Click me!",
  name: "radio-1",
  checked: true,
  color: "secondary",
}
