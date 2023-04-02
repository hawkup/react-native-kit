import React from "react";
import { Button as ButtonUI } from "react-native-ui-lib";

interface ButtonProps {
	onPress: () => void;
	text?: string;
	iconSource?: React.ComponentProps<typeof ButtonUI>["iconSource"];
}

export const Button = ({ onPress, text, iconSource }: ButtonProps) => {
	return (
		<ButtonUI
			iconSource={iconSource}
			bg-brandNormal
			borderRadius={6}
			onPress={onPress}
			label={text}
		/>
	);
};
