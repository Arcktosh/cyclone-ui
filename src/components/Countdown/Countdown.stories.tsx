import { ComponentStory, ComponentMeta } from "@storybook/react"
import Countdown from "./Countdown"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Countdown",
  component: Countdown,
} as ComponentMeta<typeof Countdown>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
)

function addDays(days: number) {
  var result = new Date()
  result.setDate(result.getDate() + days)
  return result
}

export const Base = Template.bind({})
Base.args = {
  date: addDays(2),
}

export const Boxed = Template.bind({})
Boxed.args = {
  date: addDays(2),
  boxed: true,
  bgColor: "primary",
}
