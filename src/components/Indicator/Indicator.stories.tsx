import { ComponentStory, ComponentMeta } from '@storybook/react'
import Indicator from './Indicator'

export default {
  title: 'Components/Layout/Indicator',
  component: Indicator,
} as ComponentMeta<typeof Indicator>

const Template: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args} />
)

export const EmptyBadge = Template.bind({})
EmptyBadge.args = {
  children: (
    <div className='grid w-32 h-32 bg-base-300 place-items-center'>content</div>
  ),
}

export const ForInput = Template.bind({})
ForInput.args = {
  title: 'Required',
  children: (
    <input
      type='text'
      placeholder='Your email address'
      className='input input-bordered'
    />
  ),
}
export const Responsive = Template.bind({})
Responsive.args = {
  responsive: true,
  children: (
    <div className='grid w-32 h-32 bg-base-300 place-items-center'>content</div>
  ),
}
