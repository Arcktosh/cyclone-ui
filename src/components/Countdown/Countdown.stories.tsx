import { ComponentStory, ComponentMeta } from '@storybook/react'
import Countdown from './Countdown'

export default {
    title: 'Components/DataDisplay/Countdown',
    component: Countdown
} as ComponentMeta<typeof Countdown>

const Template: ComponentStory<typeof Countdown> = (args) => <Countdown {...args} />

function addDays(days: number) {
    var result = new Date()
    result.setDate(result.getDate() + days)
    return result
}

export const Base = Template.bind({})
Base.args = {
    date: addDays(2)
}

export const Boxed = Template.bind({})
Boxed.args = {
    date: addDays(2),
    boxed: true,
    bgColor: 'primary'
}
