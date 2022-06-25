import "./Navbar.css"
export interface NavbarProps {}
const Navbar = (props: NavbarProps) => {
  return (
    <div className="navbar bg-base-100">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
  )
}

export default Navbar
