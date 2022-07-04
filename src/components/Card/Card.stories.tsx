import { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from "./Card"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/DataDisplay/Card",
  component: Card,
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
  // compactMode?: boolean // Less Padding for `card-body`
  img: { url: "https://api.lorem.space/image/shoes?w=400&h=225", alt: "Image" },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // ,directions?: Direction // Display settings for Button and Image on card
  // ,badge: BadgeProps // Add a Badge
  // ,center?: boolean // Center the Card content
  // ,bgColor?: Colors // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const Compact = Template.bind({})
Compact.args = {
  compactMode: true, // Less Padding for `card-body`
  img: { url: "https://api.lorem.space/image/shoes?w=400&h=225", alt: "Image" },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // ,directions?: Direction // Display settings for Button and Image on card
  // ,badge: BadgeProps // Add a Badge
  // ,center?: boolean // Center the Card content
  // ,bgColor?: Colors // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const WithBadge = Template.bind({})
WithBadge.args = {
  // compactMode: true, // Less Padding for `card-body`
  img: { url: "https://api.lorem.space/image/shoes?w=400&h=225", alt: "Image" },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // ,directions?: Direction // Display settings for Button and Image on card
  badge: { label: "New", color: "secondary" }, // Add a Badge
  // ,center?: boolean // Center the Card content
  // ,bgColor?: Colors // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const BottomImage = Template.bind({})
BottomImage.args = {
  // compactMode: true, // Less Padding for `card-body`
  img: { url: "https://api.lorem.space/image/shoes?w=400&h=225", alt: "Image" },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  // buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  directions: { imageBottom: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // ,center?: boolean // Center the Card content
  // ,bgColor?: Colors // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const CenteredContentPadding = Template.bind({})
CenteredContentPadding.args = {
  // compactMode: true, // Less Padding for `card-body`
  img: {
    url: "https://api.lorem.space/image/shoes?w=400&h=225",
    alt: "Image",
    padding: { top: 10, horizontal: 10 },
  },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }],
  center: true,
}
export const ImageOverlay = Template.bind({})
ImageOverlay.args = {
  // compactMode: true, // Less Padding for `card-body`
  img: {
    url: "https://api.lorem.space/image/shoes?w=400&h=225",
    alt: "Image",
    overlay: true,
  },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // directions: { imageBottom: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  // ,bgColor?: Colors // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const NoImage = Template.bind({})
NoImage.args = {
  // compactMode: true, // Less Padding for `card-body`
  // img: {
  //   url: "https://api.lorem.space/image/shoes?w=400&h=225",
  //   alt: "Image",
  //   overlay: true,
  // },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // directions: { imageBottom: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  // ,bgColor?: Colors // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const CustomColor = Template.bind({})
CustomColor.args = {
  // compactMode: true, // Less Padding for `card-body`
  // img: {
  //   url: "https://api.lorem.space/image/shoes?w=400&h=225",
  //   alt: "Image",
  //   overlay: true,
  // },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // directions: { imageBottom: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  bgColor: "primary", // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const NeutralColor = Template.bind({})
NeutralColor.args = {
  // compactMode: true, // Less Padding for `card-body`
  // img: {
  //   url: "https://api.lorem.space/image/shoes?w=400&h=225",
  //   alt: "Image",
  //   overlay: true,
  // },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Click Me!" }], // Add a Button to the Card
  // directions: { imageBottom: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  bgColor: "neutral", // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const ButtonTop = Template.bind({})
ButtonTop.args = {
  // compactMode: true, // Less Padding for `card-body`
  // img: {
  //   url: "https://api.lorem.space/image/shoes?w=400&h=225",
  //   alt: "Image",
  //   overlay: true,
  // },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "X" }], // Add a Button to the Card
  directions: { buttonTop: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  // bgColor: "neutral", // Set the Card color
  // ,isGlass?: boolean // Set the Card to be glass
}
export const Glass = Template.bind({})
Glass.args = {
  // compactMode: true, // Less Padding for `card-body`
  // img: {
  //   url: "https://api.lorem.space/image/shoes?w=400&h=225",
  //   alt: "Image",
  //   overlay: true,
  // },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Learn now!" }], // Add a Button to the Card
  // directions: { buttonTop: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  // bgColor: "neutral", // Set the Card color
  isGlass: true, // Set the Card to be glass
}
export const SideImage = Template.bind({})
SideImage.args = {
  // compactMode: true, // Less Padding for `card-body`
  img: {
    url: "https://api.lorem.space/image/shoes?w=200&h=280",
    alt: "Image",
  },
  title: "Title",
  subtitle:
    "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.",
  buttons: [{ label: "Learn now!" }], // Add a Button to the Card
  directions: { imageSide: true }, // Display settings for Button and Image on card
  // badge: { label: "New", color: "secondary" }, // Add a Badge
  // center: true, // Center the Card content
  // bgColor: "neutral", // Set the Card color
  // isGlass: true, // Set the Card to be glass
}
