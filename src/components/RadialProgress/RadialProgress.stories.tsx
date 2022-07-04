import { ComponentStory, ComponentMeta } from "@storybook/react"
import RadialProgress from "./RadialProgress"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/RadialProgress",
  component: RadialProgress,
} as ComponentMeta<typeof RadialProgress>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadialProgress> = (args) => (
  <RadialProgress {...args} />
)

export const Base = Template.bind({})
Base.args = { label: "Progress" }

export const CustomColor = Template.bind({})
CustomColor.args = { color: "secondary" }

export const WithBackgroundAndBorder = Template.bind({})
WithBackgroundAndBorder.args = { bgColor: "secondary", border: "4" }

export const WithCustomSizeAndThickness = Template.bind({})
WithCustomSizeAndThickness.args = { size: "12rem", thickness: "2px" }

export const ValueInPercent = Template.bind({})
ValueInPercent.args = { value: 50 }

export const ValueAndMax = Template.bind({})
ValueAndMax.args = { value: 50, max: 80 }
