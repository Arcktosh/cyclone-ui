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

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  // start: new Date("2020-01-01"),
  // end: new Date("2020-01-02"),
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  // start: new Date("2020-01-01"),
  // end: new Date("2020-01-02"),
}
