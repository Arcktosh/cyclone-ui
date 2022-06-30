import { ComponentStory, ComponentMeta } from "@storybook/react"
import InputGroup from "./InputGroup"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Layout/InputGroup",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
)

export const GroupLabelAndTextInputHorizontally = Template.bind({})
GroupLabelAndTextInputHorizontally.args = {
  groupLabel: "Email",
  input: [
    {
      label: [{ text: "Email", direction: "left" }],
      children: (
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered"
        />
      ),
    },
  ],
}

export const GroupTextInputAndLabelHorizontally = Template.bind({})
GroupTextInputAndLabelHorizontally.args = {
  groupLabel: "Enter amount",
  input: [
    {
      label: [{ text: "BTC", direction: "left" }],
      children: (
        <input
          type="text"
          placeholder="0.01"
          className="input input-bordered"
        />
      ),
    },
  ],
}
export const GroupTextInputAndLabelVertically = Template.bind({})
GroupTextInputAndLabelVertically.args = {
  groupLabel: "Enter amount",
  input: [
    {
      label: [{ text: "Email", direction: "left" }],
      children: (
        <input
          type="text"
          placeholder="info@site.com"
          className="input input-bordered"
        />
      ),
      vertical: true,
    },
  ],
}
