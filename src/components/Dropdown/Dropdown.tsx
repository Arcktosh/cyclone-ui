import "./Dropdown.css"
import Button from "../Button"
import { useEffect, useState } from "react"

export interface List {
  id: number
  value: string | number
}

export interface DropdownProps {
  label?: string
  dropdown?: "left" | "right" | "top" | "end"
  align?: "left" | "right" | "top" | "end"
  hover?: boolean
  open?: boolean
  card?: boolean
  cardTitle?: string
  cardSubtitle?: string
  helper?: boolean
  helperHeader?: string
  helperDescription?: string
  list?: List[]
  value?: List[] //selected values from list
  setValue?: () => void //set selected values from list
  isMultiSelect?: boolean
  //Button
  bgColor?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "accent"
    | "ghost"
    | "link"
  shape?: "square" | "circle" | "block"
  isOutlined?: boolean
  isLoading?: boolean
  disabledAnimation?: boolean
  isActive?: boolean
  isDisabled?: boolean
  isGlass?: boolean
  isWide?: boolean
  width?: number
  size?: "xs" | "sm" | "lg"
  utilClass?: string
  iconStart?: string //SVG
  iconEnd?: string //SVG
  tabIndex?: number
}
const Dropdown = (props: DropdownProps) => {
  const drop = props.dropdown ? `dropdown-${props.dropdown}` : ""
  const align = props.align ? `dropdown-${props.align}` : ""
  const hover = props.hover ? "dropdown-hover" : ""
  const open = props.open ? "dropdown-open" : ""
  const card = props.card ? "dropdown-card" : ""
  const isOutlined = props.isOutlined ? "btn btn-outline" : ""

  const [selectedValues, setAutocompleteValues] =
    useState<List[] | undefined>(undefined)

  const [selectedValue, setAutocompleteValue] =
    useState<List | undefined>(undefined)
  console.log("single: ", selectedValue, "Multi", selectedValues)
  useEffect(() => {
    if (props.list && props.value) {
      const selectedOption = props.list.filter((element) =>
        props.value?.includes(element)
      )
      props.isMultiSelect
        ? setAutocompleteValues(selectedOption)
        : setAutocompleteValue(selectedOption[0])
    } else {
      setAutocompleteValue(undefined)
    }
  }, [props.list, props.value, props.isMultiSelect])

  const onChange = (newValue: any) => {
    console.log("value: ", newValue.target.value)
    if (props.isMultiSelect) {
      selectedValues
        ? console.log(newValue.target.value)
        : setAutocompleteValue(newValue.target.value)
    } else {
      setAutocompleteValue(newValue.target.value)
    }
  }

  return props.isMultiSelect ? (
    <div
      className={`dropdown ${hover} ${open} ${card} ${drop} ${align} ${isOutlined}`}
    >
      <Button
        label={
          selectedValues
            ? typeof selectedValues[0].value === "string"
              ? selectedValues[0].value
              : selectedValues[0].value.toString()
            : props.label
        }
      />
      {props.helper ? (
        <div
          tabIndex={0}
          className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
        >
          <div className="card-body">
            <h2 className="card-title">{props.helperHeader}</h2>
            <p>{props.helperDescription}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      {props.card ? (
        <div
          tabIndex={0}
          className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
        >
          <div className="card-body">
            <h3 className="card-title">{props.cardTitle}</h3>
            <p>{props.cardSubtitle}</p>
          </div>
        </div>
      ) : props.list?.length ? (
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {props.list?.map((item) => (
            <li>
              <button
                key={item.id}
                value={item.value}
                onClick={(e) => onChange(e)}
              >
                {item.value}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <option key="1" value="Value1" onClick={(e) => onChange(e)}>
                Item 1
              </option>
            </li>
            <li>
              <button key="2" value="Value2" onClick={(e) => onChange(e)}>
                Item 2
              </button>
            </li>
          </ul>
          {props.list?.map((item) => (
            <option key={item.id} value={item.id} className="bg-white">
              {item.value}
            </option>
          ))}
        </>
      )}
      {selectedValues ? (
        selectedValues.map((item) => <span>{item.value}</span>)
      ) : selectedValue ? (
        <span>{selectedValue.value}</span>
      ) : (
        ""
      )}
    </div>
  ) : (
    <></>
  )
}

export default Dropdown
