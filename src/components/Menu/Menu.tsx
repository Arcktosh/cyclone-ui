import "./Menu.css"
export interface MenuProps {}
const Menu = (props: MenuProps) => {
  return (
    <ul className="menu bg-base-100 w-56">
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  )
}

export default Menu
