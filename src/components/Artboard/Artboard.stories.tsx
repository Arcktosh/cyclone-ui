import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from '../Button'
import Artboard from './Artboard'

export default {
    title: 'Components/Layout/Artboard',
    component: Artboard
} as ComponentMeta<typeof Artboard>

const Template: ComponentStory<typeof Artboard> = (args) => <Artboard {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    label: 'Hello world!',
    size: 'phone-1',
    horizontal: false
}

export const ChildrenTest = Template.bind({})
ChildrenTest.args = {
    label: 'Testing Children',
    size: 'phone-2',
    horizontal: true,
    children: <Button bgColor="accent" label="Login" />
}
