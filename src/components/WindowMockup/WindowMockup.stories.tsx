import { ComponentStory, ComponentMeta } from '@storybook/react'
import WindowMockup from './WindowMockup'

export default {
  title: 'Components/Mockup/WindowMockup',
  component: WindowMockup,
} as ComponentMeta<typeof WindowMockup>

const Template: ComponentStory<typeof WindowMockup> = (args) => (
  <WindowMockup {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  children: <button className='btn'>Click Me!</button>,
}
export const CustomColors = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CustomColors.args = {
  children: 'Hello world!',
  bannerBgColor: 'secondary',
  contentBgColor: 'accent',
}
