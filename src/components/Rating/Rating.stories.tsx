import { ComponentStory, ComponentMeta } from "@storybook/react"
import Rating from "./Rating"

export default {
  title: "Components/DataInput/Rating",
  component: Rating,
} as ComponentMeta<typeof Rating>

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />


export const Base = Template.bind({})
Base.args = {
  value: 0,
  count: 5,
}

export const MaskStar2 = Template.bind({})
MaskStar2.args = {
  color: "#fa0",
  shape: "star-2",
  value: 0,
  count: 5,
}
export const MaskHeart = Template.bind({});
MaskHeart.args = {
  shape: "heart",
  value: 0,
  count: 5,
};
export const Sizes = Template.bind({});
Sizes.args = {
  size: "lg",
  color: "#fa0",
  value: 2,
  count: 5,
};
export const HalfStars = Template.bind({});
HalfStars.args = {
  half: true,
  value: 3.5,
  count: 5,
};