import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

import { Button } from "./Button";
import AddCircle from "../../assets/icons/add-circle.svg";

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

export const WithIcon: Story = (args) => <Button {...args} iconSource={() => (<AddCircle style={{ marginRight: 4 }} width={20} height={20} fill={'white'} />)} />;
