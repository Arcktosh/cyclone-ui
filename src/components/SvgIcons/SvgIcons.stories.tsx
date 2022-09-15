import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconGallery } from '@storybook/addon-docs/'
import {
  CartIcon,
  NotesIcon,
  LogTicketIcon,
  TicketIcon,
  NotificationIcon,
  SearchIcon,
  DashboardIcon,
  MenuIcon,
  BlogIcon,
  ProfileIcon,
  InMailIcon,
  LessonIcon,
  MainNotesIcon,
  KnowledgeBaseIcon,
  AccSubjIcon,
  BusStudSubjIcon,
  EconSubjIcon,
  EngFALSubjIcon,
  EngHLSubjIcon,
  GeoSubjIcon,
  LifeSciSubjIcon,
  MathSubjIcon,
  MathLitSubjIcon,
  PhySciSubjIcon,
  TourismSubjIcon,
  NavBellIcon,
  NavEventsIcon,
  NavOptionsIcon,
  ModalCloseIcon,
  ApplicationsIcon,
  PullLeftIcon,
  PullRightIcon,
  LessonBullet,
  BursaryIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  QuestionIcon,
  HomeIcon,
} from './SvgIcons'

export default {
  title: 'Components/SvgIcons',
  component: IconGallery,
} as ComponentMeta<typeof IconGallery>

const Template: ComponentStory<typeof CartIcon> = (args) => (
  <IconGallery {...args}>
    <CartIcon name='CartIcon' />
    <NotesIcon name='NotesIcon' />
    <LogTicketIcon />
    <TicketIcon />
    <NotificationIcon />
    <SearchIcon />
    <DashboardIcon />
    <MenuIcon />
    <BlogIcon />
    <ProfileIcon />
    <InMailIcon />
    <LessonIcon />
    <MainNotesIcon />
    <KnowledgeBaseIcon />
    <AccSubjIcon />
    <BusStudSubjIcon />
    <EconSubjIcon />
    <EngFALSubjIcon />
    <EngHLSubjIcon />
    <GeoSubjIcon />
    <LifeSciSubjIcon />
    <MathSubjIcon />
    <MathLitSubjIcon />
    <PhySciSubjIcon />
    <TourismSubjIcon />
    <NavBellIcon />
    <NavEventsIcon />
    <NavOptionsIcon />
    <ModalCloseIcon />
    <ApplicationsIcon />
    <PullLeftIcon />
    <PullRightIcon />
    <LessonBullet />
    <BursaryIcon />
    <InfoIcon />
    <SuccessIcon />
    <WarningIcon />
    <ErrorIcon />
    <QuestionIcon />
    <HomeIcon />
  </IconGallery>
)

export const HelloWorld = Template.bind({})
HelloWorld.args = {}
