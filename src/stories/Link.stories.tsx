import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Link} from '../components/Link'

export default {
    title: 'Components/Navigation/Link',
    component: Link
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Basic = Template.bind({})
Basic.args = {
    text: "I'm a Simple Link"
}

export const ColorLink = Template.bind({})
ColorLink.args = {
    color: 'primary',
    text: 'A Simple Primary Link',
    link: 'https://www.google.com'
}
export const HoverLink = Template.bind({})
HoverLink.args = {
    color: 'primary',
    text: 'A Simple Primary Link',
    link: 'https://www.google.com',
    hover: true
}
