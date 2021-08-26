import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

export default function MyLink({ children, to }) {
	const history = useHistory();

	const handlePress = () => {
		history.push(to);
	};
	return (
		<TouchableOpacity onPress={handlePress} style={styles.btn}>
			<Text style={styles.text}>{children}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btn: {
		padding: 12,
		backgroundColor: "purple",
		borderRadius: 5,
	},
	text: {
		color: "white",
		fontWeight: "500",
		textAlign: "center",
	},
});