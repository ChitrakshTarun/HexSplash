import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";

const SettingsPage = () => {
	return (
		<View style={styles.container}>
			<Ionicons
				name={"settings-outline"}
				color={"#e0e0e0"}
				size={256}
			/>
			<Text style={styles.contentText}>
				There are no settings to be customised... yet!
			</Text>
		</View>
	);
};

export default SettingsPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		gap: 64,
		alignItems: "center",
	},
	contentText: {
		fontSize: 18,
		color: "#a0a0a0",
	},
});
