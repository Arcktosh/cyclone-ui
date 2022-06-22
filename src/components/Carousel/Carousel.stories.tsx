import { ComponentStory, ComponentMeta } from "@storybook/react"
import Carousel from "./Carousel"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
)

export const Default = Template.bind({})

Default.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
}

export const SnapToCenter = Template.bind({})
SnapToCenter.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  snapTo: { center: true },
}

export const SnapToEnd = Template.bind({})
SnapToEnd.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  snapTo: { end: true },
}
export const FullWidth = Template.bind({})
FullWidth.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  snapTo: { fullWidth: true },
  width: "48",
}
export const Vertical = Template.bind({})
Vertical.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  vertical: true,
  width: "48",
  height: "48",
}
export const HalfWidth = Template.bind({})
HalfWidth.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  snapTo: { halfWidth: true },
}
export const FullBlead = Template.bind({})
FullBlead.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  snapTo: { fullBlead: true },
}
export const Numbers = Template.bind({})
Numbers.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  indicators: { numbers: true },
}
export const Arrows = Template.bind({})
Arrows.args = {
  images: [
    { url: "https://picsum.photos/id/1/200/200" },
    { url: "https://picsum.photos/id/2/200/200" },
    { url: "https://picsum.photos/id/3/200/200" },
    { url: "https://picsum.photos/id/4/200/200" },
    { url: "https://picsum.photos/id/5/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
    { url: "https://picsum.photos/id/6/200/200" },
    { url: "https://picsum.photos/id/7/200/200" },
  ],
  indicators: { arrows: true },
}
