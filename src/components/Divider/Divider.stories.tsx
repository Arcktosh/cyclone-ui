import { ComponentStory, ComponentMeta } from '@storybook/react'
import Divider from './Divider'

export default {
    title: 'Components/Layout/Divider',
    component: Divider
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Base = Template.bind({})
Base.args = {
    text: 'Hello world!'
}

export const Horizontal = Template.bind({})
Horizontal.args = {
    text: 'Click me!',
    isHorizontal: true
}
