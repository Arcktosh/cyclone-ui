import { ComponentStory, ComponentMeta } from '@storybook/react'
import {TextInput} from '../components/TextInput'

export default {
    title: 'Components/DataInput/TextInput',
    component: TextInput
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />

export const Base = Template.bind({})
Base.args = {
    placeholder: 'Type Here!',
    onChange: (e) => console.log({ e })
}
export const Bordered = Template.bind({})
Bordered.args = {
    placeholder: 'Type Here!',
    border: true
}
export const NoBackground = Template.bind({})
NoBackground.args = {
    placeholder: 'Type Here!',
    color: 'ghost'
}
export const Labels = Template.bind({})
Labels.args = {
    placeholder: 'Type Here!',
    border: true,
    label: "What's your name?",
    altLabelTR: 'Alt Label Top Right',
    altLabelBL: 'Alt Label Bottom Left',
    altLabelBR: 'Alt Label Bottom Right'
}
export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
    placeholder: 'Type Here!',
    color: 'primary'
}
export const Size = Template.bind({})
Size.args = {
    placeholder: 'Type Here!',
    size: 'lg',
    border: true
}
export const Disabled = Template.bind({})
Disabled.args = {
    placeholder: 'Type Here!',
    disabled: true
}
