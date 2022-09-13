import { ComponentStory, ComponentMeta } from '@storybook/react'
import Modal from './Modal'

export default {
  title: 'Components/Actions/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const PopUpMessage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PopUpMessage.args = {
  button: { label: 'Open Modal!' },
  message: { heading: 'Title Goes here!', message: 'This is a modal message.' },
}

export const PopUpForm = Template.bind({})
PopUpForm.args = {
  button: { label: 'Open Modal!' },
  message: { heading: 'Hello world!', message: 'This is a modal message.' },
  children: (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>Insert Your Email</span>
      </label>
      <label className='input-group'>
        <span>Name</span>
        <input
          type='text'
          placeholder='Your Name'
          className='input input-bordered'
        />
      </label>
      <label className='input-group'>
        <span>Surname</span>
        <input
          type='text'
          placeholder='Your Surname'
          className='input input-bordered'
        />
      </label>
      <label className='input-group'>
        <span>Email</span>
        <input
          type='email'
          placeholder='info@site.com'
          className='input input-bordered'
        />
      </label>
    </div>
  ),
}
