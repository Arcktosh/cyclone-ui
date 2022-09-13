import { ComponentStory, ComponentMeta } from '@storybook/react'
import Toggle from './Toggle'

export default {
  title: 'Components/DataInput/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Base = Template.bind({})
Base.args = {
  checked: true,
  onChange: (e) => console.log({ e }),
}
export const Label = Template.bind({})
Label.args = {
  label: 'Click me!',
}
export const Color = Template.bind({})
Color.args = {
  color: 'primary',
  checked: true,
}
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Click me!',
  disabled: true,
}
