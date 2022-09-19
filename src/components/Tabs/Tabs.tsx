import { MouseEventHandler } from 'react'
import { Sizes } from '../../static'
import { ReplaceSpaces } from '../../scripts'

type Tab = {
    active?: boolean
    title?: string
    href?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface TabsProps {
    tabs: Tab[]
    size: Sizes
    bordered?: boolean
    lifted?: boolean
    boxed?: boolean
}

const Tabs = (props: TabsProps) => {
    const tabsClass = ReplaceSpaces(`tabs ${props.boxed ? 'tabs-boxed ' : ''}`)
    const tabClasses = ReplaceSpaces(`tab ${props.bordered ? 'tab-bordered ' : ''} ${props.lifted ? 'tab-lifted ' : ''} ${props.size ? `tab-${props.size}` : ''}`)

    console.log({ tabClasses, tabsClass })
    return (
        <div className={tabsClass}>
            {props.tabs ? (
                props.tabs.map((tab) =>
                    tab.href ? (
                        <a className={`${tabClasses} ${tab.active ? 'tab-active' : ''}`} href={tab.href}>
                            {tab.title}
                        </a>
                    ) : tab.onClick ? (
                        <button className={`${tabClasses} ${tab.active ? 'tab-active' : ''}`} onClick={tab.onClick}>
                            {tab.title}
                        </button>
                    ) : (
                        <a className={`${tabClasses} ${tab.active ? 'tab-active' : ''}`} href="/">
                            {tab.title}
                        </a>
                    )
                )
            ) : (
                <a className="tab" href="/">
                    Tab 1
                </a>
            )}
        </div>
    )
}

export Tabs
