import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Select} from '../components/Select'

export default {
    title: 'Components/DataInput/Select',
    component: Select
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Base = Template.bind({})
Base.args = {
    label: 'Hello world!',
    defaultSelect: 'Select an option',
    options: [
        { value: 1, label: 'Apple' },
        { value: 2, label: 'Orange' },
        { value: 3, label: 'Tomato' }
    ],
    onChange: (e: any) => console.log(e)
}

export const WithBorder = Template.bind({})
WithBorder.args = {
    label: 'Hello world!',
    defaultSelect: 'Select an option',
    border: true,
    options: [
        { value: 1, label: 'Apple' },
        { value: 2, label: 'Orange' },
        { value: 3, label: 'Tomato' }
    ]
}

export const NoBackground = Template.bind({})
NoBackground.args = {
    label: 'Hello world!',
    defaultSelect: 'Select an option',
    color: 'ghost',
    options: [
        { value: 1, label: 'Apple' },
        { value: 2, label: 'Orange' },
        { value: 3, label: 'Tomato' }
    ]
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
    label: 'Hello world!',
    defaultSelect: 'Select an option',
    color: 'primary',
    options: [
        { value: 1, label: 'Apple' },
        { value: 2, label: 'Orange' },
        { value: 3, label: 'Tomato' }
    ]
}

export const Size = Template.bind({})
Size.args = {
    label: 'Hello world!',
    size: 'lg',
    defaultSelect: 'Select an option',
    options: [
        { value: 1, label: 'Apple' },
        { value: 2, label: 'Orange' },
        { value: 3, label: 'Tomato' }
    ]
}

export const Disabled = Template.bind({})
Disabled.args = {
    defaultSelect: 'This option has been disabled',
    disabled: true
}
