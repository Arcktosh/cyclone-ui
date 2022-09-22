import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Tabs} from '../components/Tabs'

export default {
    title: 'Components/Navigation/Tabs',
    component: Tabs
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
    tabs: [
        {
            active: false,
            title: 'Title'
        },
        {
            active: true,
            title: 'Active Title'
        },
        {
            active: false,
            title: 'Title'
        },
        {
            active: false,
            title: 'Title'
        }
    ],
    size: '2xl'
}

export const Bordered = Template.bind({})
Bordered.args = {
    tabs: [
        {
            active: false,
            title: 'Title'
        },
        {
            active: true,
            title: 'Active Title'
        },
        {
            active: false,
            title: 'Title'
        },
        {
            active: false,
            title: 'Title'
        }
    ],
    size: '2xl',
    bordered: true
}

export const Lifted = Template.bind({})
Lifted.args = {
    tabs: [
        {
            active: false,
            title: 'Title'
        },
        {
            active: true,
            title: 'Active Title'
        },
        {
            active: false,
            title: 'Title'
        },
        {
            active: false,
            title: 'Title'
        }
    ],
    size: '2xl',
    lifted: true
}

export const Boxed = Template.bind({})
Boxed.args = {
    tabs: [
        {
            active: false,
            title: 'Title'
        },
        {
            active: true,
            title: 'Active Title'
        },
        {
            active: false,
            title: 'Title'
        },
        {
            active: false,
            title: 'Title'
        }
    ],
    size: '2xl',
    boxed: true
}

export const OnClick = Template.bind({})
OnClick.args = {
    tabs: [
        {
            active: false,
            title: 'Title 1',
            onClick: () => console.log('Title 1')
        },
        {
            active: true,
            title: 'Active Title',
            onClick: () => console.log('Active Title')
        },
        {
            active: false,
            title: 'Title 3',
            onClick: () => console.log('Title 3')
        },
        {
            active: false,
            title: 'Title 4',
            onClick: () => console.log('Title 4')
        }
    ],
    size: '2xl',
    boxed: true
}

export const HRef = Template.bind({})
HRef.args = {
    tabs: [
        {
            active: false,
            title: 'Title 1',
            href: '#1'
        },
        {
            active: true,
            title: 'Active Title',
            href: '#2'
        },
        {
            active: false,
            title: 'Title 3',
            href: '#3'
        },
        {
            active: false,
            title: 'Title 4',
            href: '#4'
        }
    ],
    size: '2xl',
    boxed: true
}
