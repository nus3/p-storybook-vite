import React from "react";

import { Meta, Story } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  component: Button,
  title: "components/Button",
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
