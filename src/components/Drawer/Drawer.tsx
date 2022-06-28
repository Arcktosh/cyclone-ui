import "./Drawer.css"

type Navbar = {
  top?: boolean
  side?: boolean
}
type List = {
  link?: string
  label?: string
}
export interface DrawerProps {
  label?: string
  mobile?: boolean
  navbar?: Navbar
  list?: List[]
  children?: React.ReactNode
}

const Drawer = (props: DrawerProps) => {
  const List = props.list ? (
    props.list.map((item) => (
      <li>
        <a href={item.link}>{item.label}</a>
      </li>
    ))
  ) : (
    <li>Sidebar Item 1</li>
  )
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          {props.label}
        </label>
        {props.children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {List}
        </ul>
      </div>
    </div>
  )
}

export default Drawer
