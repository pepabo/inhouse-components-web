import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Snackbar, { Props } from "./components/Snackbar";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
} as Meta;

const Template: StoryFn<Props> = (args) => <Snackbar {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {};

export const Positive = Template.bind({});
Positive.args = { color: "positive" };

export const Negative = Template.bind({});
Negative.args = { color: "negative" };

export const Notice = Template.bind({});
Notice.args = { color: "notice" };
