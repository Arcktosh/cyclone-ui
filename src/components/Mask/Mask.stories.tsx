import { ComponentStory, ComponentMeta } from "@storybook/react"
import Mask from "./Mask"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Layout/Mask",
  component: Mask,
} as ComponentMeta<typeof Mask>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Mask> = (args) => <Mask {...args} />

export const Star = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Star.args = {
  shape: "star",
  url: "https://placeimg.com/160/160/arch",
}

export const Squircle = Template.bind({})
Squircle.args = {
  shape: "squircle",
  url: "https://placeimg.com/160/160/arch",
}
