import React from "react";
import { View, Button as ButtonUI } from "react-native-ui-lib";

interface ButtonProps {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <ButtonUI
      bg-brandNormal
      borderRadius={6}
      onPress={onPress}
      label={text}
    />
  );
};
