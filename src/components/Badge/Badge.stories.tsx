import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'Components/DataDisplay/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
}

export const New = Template.bind({})
New.args = {
  label: 'New!',
  outline: true,
  color: 'primary',
  size: 'lg',
}
