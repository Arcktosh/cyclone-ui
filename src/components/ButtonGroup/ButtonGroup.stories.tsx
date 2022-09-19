import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonGroup from './ButtonGroup'

export default {
    title: 'Components/Layout/ButtonGroup',
    component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />

export const Buttons = Template.bind({})
Buttons.args = {
    buttons: [
        { label: 'Button 1', onClick: () => console.log('Button 1 clicked') },
        { label: 'Button 2', onClick: () => console.log('Button 2 clicked') },
        { label: 'Button 3', onClick: () => console.log('Button 3 clicked') }
    ]
}

export const List = Template.bind({})
List.args = {
    list: [
        { id: 1, label: 'Button 1' },
        { id: 2, label: 'Button 2' },
        { id: 3, label: 'Button 3' }
    ],
    onChange: (e) => console.log(e.target.value)
}
