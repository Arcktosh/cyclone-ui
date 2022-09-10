import { ComponentStory, ComponentMeta } from "@storybook/react"
import Tooltip from "./Tooltip"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const HelloWorld = Template.bind({})
HelloWorld.args = {
  tip: "Hello World"
}

export const Open = Template.bind({})
Open.args = {
  open: true,
  tip: "Hello Open",
};

export const Direction = Template.bind({})
Direction.args = {
  direction: { right: true },
  tip: "Hello Direction",
};
export const Color = Template.bind({})
Color.args = {
  color: "accent",
}
export const Children = Template.bind({})

Children.args = {
  tip: "Hello Children",
  children: <a className="link">Testing a child with a Tooltip</a>
}
