import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Button } from "./Button";

const Meta: ComponentMeta<typeof Button> = {
  title: "MyButton",
  component: Button,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
};

export default Meta;

type Story = ComponentStory<typeof Button>;

export const Basic: Story = (args) => <Button {...args} />;

export const Icon: Story = (args) => <Button {...args} />;

export const Ghost: Story = (args) => <Button {...args} />;

export const Block: Story = (args) => <Button {...args} />;
