import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Kbd} from '../components/Kbd'

export default {
    title: 'Components/DataDisplay/Kbd',
    component: Kbd
} as ComponentMeta<typeof Kbd>

const Template: ComponentStory<typeof Kbd> = (args) => <Kbd {...args} />

export const BasicUsage = Template.bind({})
BasicUsage.args = {
    text: 'Shift'
}
export const SetSize = Template.bind({})
SetSize.args = {
    size: 'lg',
    text: 'Shift'
}
export const AddClasses = Template.bind({})
AddClasses.args = {
    size: 'lg',
    text: 'Shift',
    classes: 'bg-base-100'
}
