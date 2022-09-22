import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Alert} from '../components/Alert'

export default {
    title: 'Components/DataDisplay/Alert',
    component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    title: 'Hello world!',
    bgColor: 'info',
    iconOn: true
}

export const ClickMe = Template.bind({})
ClickMe.args = {
    title: 'Click me!',
    description: 'This is a description',
    iconOn: true,
    children: <button className="btn btn-sm btn-ghost">Deny</button>
}
