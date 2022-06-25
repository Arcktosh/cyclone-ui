import "./Tabs.css"

export interface TabsProps {}

const Tabs = (props: TabsProps) => {
  return (
    <div className="tabs">
      <a className="tab">Tab 1</a>
      <a className="tab tab-active">Tab 2</a>
      <a className="tab">Tab 3</a>
    </div>
  )
}

export default Tabs
