import { ComponentStory, ComponentMeta } from "@storybook/react"
import Menu from "./Menu"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Navigation/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

export const Base = Template.bind({})
Base.args = {
  menu: [
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}

export const WithActiveItem = Template.bind({})
WithActiveItem.args = {
  menu: [
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/", isActive: true },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
export const RoundedCorners = Template.bind({})
RoundedCorners.args = {
  isRounded: true,
  menu: [
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
export const Compact = Template.bind({})
Compact.args = {
  isRounded: true,
  compact: true,
  menu: [
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
export const Horizontal = Template.bind({})
Horizontal.args = {
  isRounded: true,
  horizontal: true,
  menu: [
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
export const WithBorder = Template.bind({})
WithBorder.args = {
  isRounded: true,
  menu: [
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Has a Border", url: "/", bordered: true },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
export const WithIcons = Template.bind({})
WithIcons.args = {
  isRounded: true,
  menu: [
    {
      items: [
        {
          value: "Item 1",
          url: "/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        },
        {
          value: "Has a Border",
          url: "/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          ),
        },
        { value: "Item 3", url: "/", icon: "💩" },
      ],
    },
  ],
}
export const OnlyIcons = Template.bind({})
OnlyIcons.args = {
  isRounded: true,
  onlyIcon: true,
  menu: [
    {
      items: [
        {
          value: "Item 1",
          url: "/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        },
        {
          value: "Has a Border",
          url: "/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          ),
        },
        { value: "Item 3", url: "/", icon: "💩" },
      ],
    },
  ],
}
export const WithTitle = Template.bind({})
WithTitle.args = {
  isRounded: true,
  menu: [
    {
      title: "Category 1",
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
    {
      title: "Category 2",
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
export const SubMenu = Template.bind({})
SubMenu.args = {
  isRounded: true,
  menu: [
    {
      title: "Category 1",
      submenu: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
    {
      title: "Category 2",
      submenu: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
    {
      items: [
        { value: "Item 1", url: "/" },
        { value: "Item 2", url: "/" },
        { value: "Item 3", url: "/" },
      ],
    },
  ],
}
