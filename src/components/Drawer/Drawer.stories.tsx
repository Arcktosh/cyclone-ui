import { ComponentStory, ComponentMeta } from '@storybook/react'
import Countdown from '../Countdown'
import Drawer from './Drawer'

export default {
  title: 'Components/Layout/Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  label: 'Menu',
  list: [
    { label: 'Item 1', link: '#' },
    { label: 'Item 2', link: '#' },
  ],
}

export const WithContent = Template.bind({})
WithContent.args = {
  label: 'Menu',
  list: [
    { label: 'Item 1', link: '#' },
    { label: 'Item 2', link: '#' },
  ],
  children: (
    <>
      <br />
      <Countdown />
    </>
  ),
}
