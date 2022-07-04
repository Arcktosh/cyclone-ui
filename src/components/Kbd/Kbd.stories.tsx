import { ComponentStory, ComponentMeta } from "@storybook/react"
import Kbd from "./Kbd"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Kbd",
  component: Kbd,
} as ComponentMeta<typeof Kbd>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Kbd> = (args) => <Kbd {...args} />

export const BasicUsage = Template.bind({})
BasicUsage.args = {
  text: "Shift",
}
export const SetSize = Template.bind({})
SetSize.args = {
  size: "lg",
  text: "Shift",
}
export const AddClasses = Template.bind({})
AddClasses.args = {
  size: "lg",
  text: "Shift",
  classes: "bg-base-100",
}
