import { ComponentStory, ComponentMeta } from '@storybook/react'
import Stat from './Stat'

export default {
  title: 'Components/DataDisplay/Stat',
  component: Stat,
} as ComponentMeta<typeof Stat>

const Template: ComponentStory<typeof Stat> = (args) => <Stat {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  stats: [
    {
      values: [
        {
          label: 'Total Likes',
          type: 'title',
        },
        {
          label: '25.6K',
          type: 'value',
          color: 'primary',
        },
        {
          label: '21% more than last month',
          type: 'desc',
        },
      ],
    },
  ],
}

export const IconOrImage = Template.bind({})
IconOrImage.args = {
  stats: [
    {
      values: [
        {
          type: 'figure',
          children: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              ></path>
            </svg>
          ),
        },
        {
          label: 'Total Likes',
          type: 'title',
        },
        {
          label: '25.6K',
          type: 'value',
          color: 'primary',
        },
      ],
    },
    {
      values: [
        {
          type: 'figure',
          color: 'secondary',
          children: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              ></path>
            </svg>
          ),
        },
        {
          label: 'Page Views',
          type: 'title',
        },
        {
          label: '2.6M',
          type: 'value',
          color: 'secondary',
        },
      ],
    },
    {
      values: [
        {
          type: 'figure',
          color: 'secondary',
          children: (
            <div className='avatar online'>
              <div className='w-16 rounded-full'>
                <img src='https://placeimg.com/128/128/people' alt='person' />
              </div>
            </div>
          ),
        },
        {
          label: '86%',
          type: 'value',
        },
        {
          label: 'Tasks done',
          type: 'title',
        },
        {
          label: '31 tasks remaining',
          type: 'desc',
          color: 'secondary',
        },
      ],
    },
  ],
}

export const Vertical = Template.bind({})
Vertical.args = {
  stats: [
    {
      values: [
        {
          type: 'figure',
          children: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              ></path>
            </svg>
          ),
        },
        {
          label: 'Total Likes',
          type: 'title',
        },
        {
          label: '25.6K',
          type: 'value',
          color: 'primary',
        },
      ],
    },
    {
      values: [
        {
          type: 'figure',
          color: 'secondary',
          children: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              ></path>
            </svg>
          ),
        },
        {
          label: 'Page Views',
          type: 'title',
        },
        {
          label: '2.6M',
          type: 'value',
          color: 'secondary',
        },
      ],
    },
    {
      values: [
        {
          type: 'figure',
          color: 'secondary',
          children: (
            <div className='avatar online'>
              <div className='w-16 rounded-full'>
                <img src='https://placeimg.com/128/128/people' alt='person' />
              </div>
            </div>
          ),
        },
        {
          label: '86%',
          type: 'value',
        },
        {
          label: 'Tasks done',
          type: 'title',
        },
        {
          label: '31 tasks remaining',
          type: 'desc',
          color: 'secondary',
        },
      ],
    },
  ],
  vertical: true,
}
export const VerticalResponsive = Template.bind({})
VerticalResponsive.args = {
  stats: [
    {
      values: [
        {
          type: 'figure',
          children: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              ></path>
            </svg>
          ),
        },
        {
          label: 'Total Likes',
          type: 'title',
        },
        {
          label: '25.6K',
          type: 'value',
          color: 'primary',
        },
      ],
    },
    {
      values: [
        {
          type: 'figure',
          color: 'secondary',
          children: (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-8 h-8 stroke-current'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 10V3L4 14h7v7l9-11h-7z'
              ></path>
            </svg>
          ),
        },
        {
          label: 'Page Views',
          type: 'title',
        },
        {
          label: '2.6M',
          type: 'value',
          color: 'secondary',
        },
      ],
    },
    {
      values: [
        {
          type: 'figure',
          color: 'secondary',
          children: (
            <div className='avatar online'>
              <div className='w-16 rounded-full'>
                <img src='https://placeimg.com/128/128/people' alt='person' />
              </div>
            </div>
          ),
        },
        {
          label: '86%',
          type: 'value',
        },
        {
          label: 'Tasks done',
          type: 'title',
        },
        {
          label: '31 tasks remaining',
          type: 'desc',
          color: 'secondary',
        },
      ],
    },
  ],
  vertical: true,
  responsive: true,
}
