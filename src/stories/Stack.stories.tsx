import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Stack} from '../components/Stack'

export default {
    title: 'Components/Layout/Stack',
    component: Stack
} as ComponentMeta<typeof Stack>

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />

export const WithDivs = Template.bind({})
WithDivs.args = {
    stack: (
        <>
            <div className="text-center shadow-md w-36 card bg-base-200">
                <div className="card-body">A</div>
            </div>
            <div className="text-center shadow w-36 card bg-base-200">
                <div className="card-body">B</div>
            </div>
            <div className="text-center shadow-sm w-36 card bg-base-200">
                <div className="card-body">C</div>
            </div>
        </>
    )
}
