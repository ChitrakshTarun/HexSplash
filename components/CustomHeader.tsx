import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomHeader = () => {
	return (
		<View style={styles.container}>
			<Text>CustomHeader</Text>
		</View>
	);
};

export default CustomHeader;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 100,
	},
});
