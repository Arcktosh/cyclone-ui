import { ComponentStory, ComponentMeta } from '@storybook/react'
import {QRCode} from '../components/QRCode'

export default {
    title: 'Components/QRCode',
    component: QRCode
} as ComponentMeta<typeof QRCode>

const Template: ComponentStory<typeof QRCode> = (args) => <QRCode {...args} />

export const Basic = Template.bind({})
Basic.args = {
    link: 'https://github.com'
}

export const ColorQRCode = Template.bind({})
ColorQRCode.args = {
    link: 'https://api.lorem.space/image/face?hash=92048',
    bgColor: '#4D9AFF',
    fgColor: '#FFFFFF'
}
export const QRCodeWithImage = Template.bind({})
QRCodeWithImage.args = {
    link: 'https://api.lorem.space/image/face?hash=92048',
    imageSettings: {
        src: 'https://api.lorem.space/image/face?hash=92048',
        x: 51,
        y: 51,
        height: 24,
        width: 24,
        excavate: true
    }
}
export const QRCodeWithVCard = Template.bind({})
QRCodeWithVCard.args = {
    vCard: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'Doe@email.com',
        workPhone: '+1-555-555-5555',
        url: 'https://github.com',
        company: 'Cyclone UI',
        street: '123 Main St',
        country: 'United States'
    }
}
