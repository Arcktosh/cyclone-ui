import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SearchIcon, MenuIcon, NotificationIcon, CartIcon } from "../SvgIcons"
import Navbar from "./Navbar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Navigation/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Responsive = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Responsive.args = {
  start: (
    <>
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a className="justify-between">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl">Cyclone UI</a>
    </>
  ),
  center: (
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li>
          <a>Item 1</a>
        </li>
        <li tabIndex={0}>
          <a>
            Parent
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  ),
  end: <a className="btn">Get started</a>,
}

export const DropdownCenterLogoAndIcon = Template.bind({})
DropdownCenterLogoAndIcon.args = {
  start: (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <MenuIcon />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Homepage</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  ),
  center: <a className="btn btn-ghost normal-case text-xl">Cyclone UI</a>,
  end: (
    <>
      <button className="btn btn-ghost btn-circle">
        <SearchIcon />
      </button>
      <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <NotificationIcon />
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </>
  ),
}
export const IconIndicatorAndDropdown = Template.bind({})
IconIndicatorAndDropdown.args = {
  children: (
    <>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Cyclone UI</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <CartIcon />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  ),
}
export const TitleOnly = Template.bind({})
TitleOnly.args = {
  children: <a className="btn btn-ghost normal-case text-xl">Cyclone UI</a>,
}
