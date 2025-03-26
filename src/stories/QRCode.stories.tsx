import { ComponentStory, ComponentMeta } from '@storybook/react'
import { QRCode } from '../components/QRCode'

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
    link: 'https://gemomarvellabs.co.za',
    imageSettings: {
        src: 'https://gemomarvellabs.co.za/wp-content/logo.png',
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
        firstname: 'Ben',
        lastname: 'Henning',
        email: 'b.henning@gemomarvellabs.co.za',
        workPhone: '+27 71 483 9805',
        url: 'https://gemomarvellabs.co.za',
        company: 'Gemological Marvel Labs',
        city: 'Bloemfontein',
        country: 'South Africa'
    }
}
