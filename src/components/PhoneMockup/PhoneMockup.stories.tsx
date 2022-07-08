import { ComponentStory, ComponentMeta } from "@storybook/react"
import PhoneMockup from "./PhoneMockup"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Mockup/PhoneMockup",
  component: PhoneMockup,
} as ComponentMeta<typeof PhoneMockup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PhoneMockup> = (args) => (
  <PhoneMockup {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  children: <button className="btn">Click Me!</button>,
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  children: "Hello world!",
  bannerBgColor: "secondary",
  contentBgColor: "accent",
}
