import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from './Avatar'

export default {
  title: 'Components/DataDisplay/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  url: 'https://api.lorem.space/image/face?hash=92048',
  alt: 'Hello!',
}

export const AdvancedShape = Template.bind({})
AdvancedShape.args = {
  alt: 'Advanced Shape',
  shape: 'hexagon',
  presence: { online: true },
}
export const Grouped = Template.bind({})
Grouped.args = {
  grouped: [
    { alt: 'Avatar 1', url: 'https://api.lorem.space/image/face?hash=92048' },
    { alt: 'Avatar Avatar', url: '' },
    { alt: 'Avatar 3', url: 'https://api.lorem.space/image/face?hash=92048' },
    { alt: 'Avatar 4', url: 'https://api.lorem.space/image/face?hash=92048' },
  ],
  groupedLimit: 3,
}
