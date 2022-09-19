import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
    title: 'Components/DataInput/Checkbox',
    component: Checkbox
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {}

export const CustomColor = Template.bind({})
CustomColor.args = {
    label: 'Click me!',
    color: 'secondary'
}
export const Size = Template.bind({})
Size.args = {
    label: 'Click me!',
    color: 'secondary',
    size: 'xs'
}
export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Click me!',
    color: 'secondary',
    disabled: true
}
