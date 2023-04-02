import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

import { Button } from "./Button";

const Meta: ComponentMeta<typeof Button> = {
  title: "Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  }
};

export default Meta;

type Story = ComponentStory<typeof Button>;

export const Basic: Story = (args) => <Button {...args} />;
