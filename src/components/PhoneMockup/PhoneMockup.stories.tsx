import { ComponentStory, ComponentMeta } from '@storybook/react'
import PhoneMockup from './PhoneMockup'

export default {
  title: 'Components/Mockup/PhoneMockup',
  component: PhoneMockup,
} as ComponentMeta<typeof PhoneMockup>

const Template: ComponentStory<typeof PhoneMockup> = (args) => (
  <PhoneMockup {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  children: <button className='btn'>Click Me!</button>,
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  children: 'Hello world!',
  bannerBgColor: 'secondary',
  contentBgColor: 'accent',
}
