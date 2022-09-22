import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HomeIcon, InfoIcon } from '../components/SvgIcons'
import {Menu} from '../components/Menu'

export default {
    title: 'Components/Navigation/Menu',
    component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Base = Template.bind({})
Base.args = {
    menu: [
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}

export const WithActiveItem = Template.bind({})
WithActiveItem.args = {
    menu: [
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/', isActive: true },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
export const RoundedCorners = Template.bind({})
RoundedCorners.args = {
    isRounded: true,
    menu: [
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
export const Compact = Template.bind({})
Compact.args = {
    isRounded: true,
    compact: true,
    menu: [
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
export const Horizontal = Template.bind({})
Horizontal.args = {
    isRounded: true,
    horizontal: true,
    menu: [
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
export const WithBorder = Template.bind({})
WithBorder.args = {
    isRounded: true,
    menu: [
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Has a Border', url: '/', bordered: true },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
export const WithIcons = Template.bind({})
WithIcons.args = {
    isRounded: true,
    menu: [
        {
            items: [
                {
                    value: 'Item 1',
                    url: '/',
                    icon: <InfoIcon />
                },
                {
                    value: 'Has a Border',
                    url: '/',
                    icon: <HomeIcon />
                },
                { value: 'Item 3', url: '/', icon: '💩' }
            ]
        }
    ]
}
export const OnlyIcons = Template.bind({})
OnlyIcons.args = {
    isRounded: true,
    onlyIcon: true,
    menu: [
        {
            items: [
                {
                    value: 'Item 1',
                    url: '/',
                    icon: <InfoIcon />
                },
                {
                    value: 'Has a Border',
                    url: '/',
                    icon: <HomeIcon />
                },
                { value: 'Item 3', url: '/', icon: '💩' }
            ]
        }
    ]
}
export const WithTitle = Template.bind({})
WithTitle.args = {
    isRounded: true,
    menu: [
        {
            title: 'Category 1',
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        },
        {
            title: 'Category 2',
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
export const SubMenu = Template.bind({})
SubMenu.args = {
    isRounded: true,
    menu: [
        {
            title: 'Category 1',
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        },
        {
            title: 'Category 2',
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        },
        {
            items: [
                { value: 'Item 1', url: '/' },
                { value: 'Item 2', url: '/' },
                { value: 'Item 3', url: '/' }
            ]
        }
    ]
}
