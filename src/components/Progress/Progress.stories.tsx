import { ComponentStory, ComponentMeta } from '@storybook/react'
import Progress from './Progress'

export default {
    title: 'Components/DataDisplay/Progress',
    component: Progress
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />

export const Base = Template.bind({})
Base.args = {
    width: '56',
    value: 10
}

export const SuccessColor = Template.bind({})
SuccessColor.args = {
    color: 'success'
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
    indeterminate: true
}
