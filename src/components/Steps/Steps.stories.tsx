import { ComponentStory, ComponentMeta } from '@storybook/react'
import Steps from './Steps'

export default {
    title: 'Components/Navigation/Steps',
    component: Steps
} as ComponentMeta<typeof Steps>

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    steps: [
        {
            title: 'Register',
            color: 'primary',
            content: '?'
        },
        {
            title: 'Choose plan',
            color: 'primary'
        },
        {
            title: 'Purchase',
            color: 'secondary',
            onClick: () => console.log('Button 3 clicked')
        },
        {
            title: 'Receive Product',
            color: 'accent',
            content: '★'
        }
    ]
}

export const Color = Template.bind({})
Color.args = {
    color: 'secondary',
    steps: [
        {
            color: 'primary',
            content: '?'
        },
        {
            color: 'primary',
            content: '★'
        },
        {
            color: 'secondary',
            content: '●'
        },
        {
            color: 'accent'
        }
    ]
}
export const Vertical = Template.bind({})
Vertical.args = {
    vertical: true,
    steps: [
        {
            title: 'Register',
            color: 'primary',
            content: '?'
        },
        {
            title: 'Choose plan',
            color: 'primary'
        },
        {
            title: 'Purchase',
            color: 'secondary'
        },
        {
            title: 'Receive Product',
            color: 'accent',
            content: '★'
        }
    ]
}
