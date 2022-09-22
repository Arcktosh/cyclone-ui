import { ComponentStory, ComponentMeta } from '@storybook/react'
import {Hero} from '../components/Hero'

export default {
    title: 'Components/Layout/Hero',
    component: Hero
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    title: { title: 'Hello there', fontSize: '2xl' },
    content: (
        <>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
        </>
    ),
    centered: true
}

export const WithFigure = Template.bind({})
WithFigure.args = {
    image: <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt="alt_image" />,
    title: { title: 'Box Office News!', fontSize: '5xl' },
    content: (
        <>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
        </>
    )
}
export const OverlayBackground = Template.bind({})
OverlayBackground.args = {
    overlayBackground: 'https://api.lorem.space/image/fashion?w=1000&h=800',
    title: { title: 'Box Office News!', fontSize: '5xl' },
    content: (
        <>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
        </>
    )
}
