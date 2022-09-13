import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Actions/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: 'Click me!',
}
