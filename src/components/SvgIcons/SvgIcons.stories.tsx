import { ComponentStory, ComponentMeta } from "@storybook/react"
import { IconGallery, IconItem } from '@storybook/addon-docs/'
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
} from "./SvgIcons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/SvgIcons",
  component: CartIcon,
} as ComponentMeta<typeof CartIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartIcon> = (args) => (
  <IconGallery {...args}>
    <IconItem name="CartIcon">
      <CartIcon name="CartIcon" />
    </IconItem>
    <IconItem name="NotesIcon">
      <NotesIcon name="NotesIcon" />
    </IconItem>
    <IconItem name="LogTicketIcon">
      <LogTicketIcon />
    </IconItem>
    <IconItem name="TicketIcon">
      <TicketIcon />
    </IconItem>
    <IconItem name="NotificationIcon">
      <NotificationIcon />
    </IconItem>
    <IconItem name="SearchIcon">
      <SearchIcon />
    </IconItem>
    <IconItem name="DashboardIcon">
      <DashboardIcon />
    </IconItem>
    <IconItem name="MenuIcon">
      <MenuIcon />
    </IconItem>
    <IconItem name="BlogIcon">
      <BlogIcon />
    </IconItem>
    <IconItem name="ProfileIcon">
      <ProfileIcon />
    </IconItem>
    <IconItem name="InMailIcon">
      <InMailIcon />
    </IconItem>
    <IconItem name="LessonIcon">
      <LessonIcon />
    </IconItem>
    <IconItem name="MainNotesIcon">
      <MainNotesIcon />
    </IconItem>
    <IconItem name="KnowledgeBaseIcon">
      <KnowledgeBaseIcon />
    </IconItem>
    <IconItem name="AccSubjIcon">
      <AccSubjIcon />
    </IconItem>
    <IconItem name="BusStudSubjIcon">
      <BusStudSubjIcon />
    </IconItem>
    <IconItem name="EconSubjIcon">
      <EconSubjIcon />
    </IconItem>
    <IconItem name="EngFALSubjIcon">
      <EngFALSubjIcon />
    </IconItem>
    <IconItem name="EngHLSubjIcon">
      <EngHLSubjIcon />
    </IconItem>
    <IconItem name="GeoSubjIcon">
      <GeoSubjIcon />
    </IconItem>
    <IconItem name="LifeSciSubjIcon">
      <LifeSciSubjIcon />
    </IconItem>
    <IconItem name="MathSubjIcon">
      <MathSubjIcon />
    </IconItem>
    <IconItem name="MathLitSubjIcon">
      <MathLitSubjIcon />
    </IconItem>
    <IconItem name="PhySciSubjIcon">
      <PhySciSubjIcon />
    </IconItem>
    <IconItem name="TourismSubjIcon">
      <TourismSubjIcon />
    </IconItem>
    <IconItem name="NavBellIcon">
      <NavBellIcon />
    </IconItem>
    <IconItem name="NavEventsIcon">
      <NavEventsIcon />
    </IconItem>
    <IconItem name="NavOptionsIcon">
      <NavOptionsIcon />
    </IconItem>
    <IconItem name="ModalCloseIcon">
      <ModalCloseIcon />
    </IconItem>
    <IconItem name="ApplicationsIcon">
      <ApplicationsIcon />
    </IconItem>
    <IconItem name="PullLeftIcon">
      <PullLeftIcon />
    </IconItem>
    <IconItem name="PullRightIcon">
      <PullRightIcon />
    </IconItem>
    <IconItem name="LessonBullet">
      <LessonBullet />
    </IconItem>
    <IconItem name="BursaryIcon">
      <BursaryIcon />
    </IconItem>
    <IconItem name="InfoIcon">
      <InfoIcon />
    </IconItem>
    <IconItem name="SuccessIcon">
      <SuccessIcon />
    </IconItem>
    <IconItem name="WarningIcon">
      <WarningIcon />
    </IconItem>
    <IconItem name="ErrorIcon">
      <ErrorIcon />
    </IconItem>
    <IconItem name="QuestionIcon">
      <QuestionIcon />
    </IconItem>
    <IconItem name="HomeIcon">
      <HomeIcon />
    </IconItem>
  </IconGallery>
);

export const HelloWorld = Template.bind({}) 
HelloWorld.args = {};