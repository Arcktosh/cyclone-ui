import Code from 'qrcode.react'
import VCard from 'vcard-creator'
import './QRCode.css'

type ImageSettings = {
  src?: string
  x?: number
  y?: number
  height?: number
  width?: number
  excavate?: boolean
}

type VCardProps = {
  firstname?: string
  lastname?: string
  additional?: string
  prefix?: string
  suffix?: string
  company?: string
  jobtitle?: string
  role?: string
  email?: string
  workPhone?: string
  extended?: string
  street?: string
  city?: string
  region?: string
  zip?: string
  country?: string
  addressType?: string
  url?: string
}

export interface QRCodeProps {
  link?: string
  renderAs?: 'svg' | 'canvas'
  size?: number
  bgColor?: string
  fgColor?: string
  level?: 'L' | 'M' | 'Q' | 'H'
  includeMargin?: boolean
  imageSettings?: ImageSettings
  vCard?: VCardProps
}

const QRCode = (props: QRCodeProps) => {
  const myVCard = new VCard()

  if (props.vCard) {
    myVCard
      .addName(
        props.vCard?.lastname,
        props.vCard?.firstname,
        props.vCard?.additional,
        props.vCard?.prefix,
        props.vCard?.suffix
      )
      .addCompany(props.vCard.company ? props.vCard.company : '')
      .addJobtitle(props.vCard.jobtitle ? props.vCard.jobtitle : '')
      .addRole(props.vCard.role ? props.vCard.role : '')
      .addEmail(props.vCard.email ? props.vCard.email : '')
      .addPhoneNumber(
        props.vCard.workPhone ? props.vCard.workPhone : '',
        'PREF;WORK'
      )
      .addPhoneNumber(
        props.vCard.workPhone ? props.vCard.workPhone : '',
        'WORK'
      )
      .addAddress(
        props.vCard?.company,
        props.vCard?.extended,
        props.vCard?.street,
        props.vCard?.city,
        props.vCard?.region,
        props.vCard?.zip,
        props.vCard?.country,
        props.vCard?.addressType
      )
      .addURL(props.vCard.url ? props.vCard.url : '')
  }

  return props.imageSettings ? (
    <Code
      value={props.link ? props.link : myVCard ? myVCard.toString() : ''}
      renderAs={props.renderAs ? props.renderAs : 'canvas'}
      size={props.size ? props.size : 128}
      bgColor={props.bgColor ? props.bgColor : '#FFFFFF'}
      fgColor={props.fgColor ? props.fgColor : '#000000'}
      level={props.level ? props.level : 'L'}
      includeMargin={props.includeMargin ? props.includeMargin : false}
      imageSettings={{
        src: props.imageSettings.src ? props.imageSettings.src : '',
        x: props.imageSettings.x,
        y: props.imageSettings.y,
        height: props.imageSettings.height ? props.imageSettings.height : 24,
        width: props.imageSettings.width ? props.imageSettings.width : 24,
        excavate: props.imageSettings.excavate
          ? props.imageSettings.excavate
          : true,
      }}
    />
  ) : (
    <Code
      value={props.link ? props.link : myVCard ? myVCard.toString() : ''}
      renderAs={props.renderAs ? props.renderAs : 'canvas'}
      size={props.size ? props.size : 128}
      bgColor={props.bgColor ? props.bgColor : '#FFFFFF'}
      fgColor={props.fgColor ? props.fgColor : '#000000'}
      level={props.level ? props.level : 'L'}
      includeMargin={props.includeMargin ? props.includeMargin : false}
    />
  )
}

export default QRCode
