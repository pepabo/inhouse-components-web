import type { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Snackbar, { Props } from "./components/Snackbar";

export default {
  title: "Components/Snackbar",
  component: Snackbar,
} as Meta;

const Template: StoryFn<Props> = (args) => <Snackbar {...args} />;

export const Neutral = Template.bind({});
Neutral.args = { color: "neutral", isActive: true };

export const Positive = Template.bind({});
Positive.args = { color: "positive", isActive: true };

export const Negative = Template.bind({});
Negative.args = { color: "negative", isActive: true };

export const Notice = Template.bind({});
Notice.args = { color: "notice", isActive: true };

export const NeutralInline = Template.bind({});
NeutralInline.args = { color: "neutral", isActive: true, isInline: true };

export const PositiveInline = Template.bind({});
PositiveInline.args = { color: "positive", isActive: true, isInline: true };

export const NegativeInline = Template.bind({});
NegativeInline.args = { color: "negative", isActive: true, isInline: true };

export const NoticeInline = Template.bind({});
NoticeInline.args = { color: "notice", isActive: true, isInline: true };
