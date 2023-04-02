import React from "react";
import { Button as ButtonUI } from "react-native-ui-lib";

interface ButtonProps {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: ButtonProps) => {
  return <ButtonUI text70 white background-orange30 onPress={onPress} label={text}/>
};
