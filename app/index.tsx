import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
	useFonts,
	Merienda_300Light,
	Merienda_400Regular,
	Merienda_500Medium,
	Merienda_600SemiBold,
	Merienda_700Bold,
	Merienda_800ExtraBold,
	Merienda_900Black,
} from "@expo-google-fonts/merienda";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
	const router = useRouter();
	let [fontsLoaded] = useFonts({
		Merienda_300Light,
		Merienda_400Regular,
		Merienda_500Medium,
		Merienda_600SemiBold,
		Merienda_700Bold,
		Merienda_800ExtraBold,
		Merienda_900Black,
	});
	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			<LinearGradient
				colors={["#F78FAD", "#A16BFE"]}
				style={styles.background}
			/>
			<View style={styles.textLogoContainer}>
				<Text style={styles.textLogo}>HexSplash</Text>
				<Text style={styles.subTextLogo}>Generate a color palette</Text>
				<Text style={styles.subTextLogo}>for your design </Text>
			</View>
			<View style={{ flex: 1 }}></View>
			<Pressable
				style={styles.button}
				onPress={() => router.replace("/generator")}
			>
				<Ionicons
					name="color-palette-outline"
					size={32}
					color="#FFFFFF"
				/>
				<View style={{ flex: 1 }}>
					<Text style={styles.subTextLogo}>Let's Get Started</Text>
				</View>
				<View>
					<Ionicons
						name="chevron-forward-outline"
						size={32}
						color="#FFFFFF"
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default index;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	background: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	blurContainer: {
		flex: 1,
		padding: 20,
		margin: 16,
		textAlign: "center",
		justifyContent: "center",
		overflow: "hidden",
		borderRadius: 20,
	},
	textLogoContainer: {
		top: 32,
		justifyContent: "center",
	},
	textLogo: {
		fontFamily: "Merienda_900Black",
		fontSize: 60,
		color: "#fff",
		textAlign: "center",
	},
	subTextLogo: {
		fontFamily: "Merienda_400Regular",
		bottom: 2,
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
		paddingHorizontal: 10,
	},
	button: {
		flexDirection: "row",
		backgroundColor: "rgba(255,255,255, 0.1)",
		padding: 20,
		borderRadius: 20,
		margin: 16,
		justifyContent: "space-between",
		alignItems: "center",
		bottom: 150,
	},
});
