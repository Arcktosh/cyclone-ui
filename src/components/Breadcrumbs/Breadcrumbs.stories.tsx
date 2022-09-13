import { ComponentStory, ComponentMeta } from '@storybook/react'
import Breadcrumbs from './Breadcrumbs'
import { MainNotesIcon } from '../SvgIcons/SvgIcons'

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  links: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Documents',
      url: '/documents',
    },
    {
      label: 'Add Document',
      url: '/add-document',
    },
  ],
}

export const WithMaxWidth = Template.bind({})
WithMaxWidth.args = {
  links: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Documents', url: '/documents' },
    { label: 'Add Document', url: '/add-document' },
  ],
  textSize: 'md',
  maxWidth: 'md',
}
export const WithIcons = Template.bind({})

WithIcons.args = {
  links: [
    {
      label: 'Home',
      url: '/',
      icon: <MainNotesIcon width='1.2em' />,
    },
    {
      label: 'About',
      url: '/about',
      icon: <MainNotesIcon width='1.2em' />,
    },
    {
      label: 'Documents',
      url: '/documents',
      icon: <MainNotesIcon width='1.2em' />,
    },
    {
      label: 'Add Document',
      url: '/add-document',
      icon: <MainNotesIcon width='1.2em' />,
    },
  ],
  maxWidth: 'lg',
}
