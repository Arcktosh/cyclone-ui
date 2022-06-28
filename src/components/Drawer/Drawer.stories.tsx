import { ComponentStory, ComponentMeta } from "@storybook/react"
import Countdown from "../Countdown"
import Drawer from "./Drawer"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Layout/Drawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  label: "Menu",
  list: [
    { label: "Item 1", link: "#" },
    { label: "Item 2", link: "#" },
  ],
}

export const WithContent = Template.bind({})
WithContent.args = {
  label: "Menu",
  list: [
    { label: "Item 1", link: "#" },
    { label: "Item 2", link: "#" },
  ],
  children: (
    <>
      <br />
      <Countdown />
    </>
  ),
}
