import { ComponentStory, ComponentMeta } from '@storybook/react'
import {RangeSlider} from '../components/RangeSlider'

export default {
    title: 'Components/DataInput/RangeSlider',
    component: RangeSlider
} as ComponentMeta<typeof RangeSlider>

const Template: ComponentStory<typeof RangeSlider> = (args) => <RangeSlider {...args} />

export const Base = Template.bind({})
Base.args = {
    steps: 1,
    onChange: (e) => console.log(e.target.value)
}

export const Color = Template.bind({})
Color.args = {
    color: 'primary',
    onChange: (e) => console.log(e.target.value)
}

export const Size = Template.bind({})
Size.args = {
    size: '5xl',
    steps: 1,
    onChange: (e) => console.log(e.target.value)
}

export const StepsAndMeasure = Template.bind({})
StepsAndMeasure.args = {
    children: (
        <div className="w-full flex justify-between text-xs px-2">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
        </div>
    )
}
