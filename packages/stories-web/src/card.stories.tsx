import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Card, { Props } from "./components/card/Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<Props> = (args) => <Card {...args} />;

export const Index = Template.bind({});
Index.args = {
  appearance: "elevated",
  body: "Card body",
  color: "primary",
  isGapless: false,
  shape: "circle",
};
