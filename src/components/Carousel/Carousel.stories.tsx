import { ComponentStory, ComponentMeta } from "@storybook/react"
import Carousel from "./Carousel"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: "Click me!",
}
