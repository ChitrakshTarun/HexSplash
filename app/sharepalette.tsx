import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import Share from "react-native-share";
import { isColorDark } from "@/components/IsColorDark";

/* 
TODO: Add Download functionality as well. Save to an album named HexSplash into the user's gallery.
*/
const SharePalette = () => {
	const { colors } = useLocalSearchParams();
	const parsedColors = JSON.parse(colors);
	const ref = useRef();
	const [uri, setUri] = useState<string>("Test");
	useEffect(() => {
		ref.current.capture().then((uri: any) => {
			// console.log("Captured URI", uri);
			setUri(uri);
		});
	}, []);
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>My Color Palette | HexSplash</Text>
			<ViewShot ref={ref}>
				<View style={styles.paletteContainer}>
					{parsedColors.map((color: string, index: number) => (
						<View
							key={index}
							style={styles.paletteElementContainer}
						>
							<View style={{ backgroundColor: color, width: "100%", height: "100%" }}>
								<Text style={[styles.colorText, { color: isColorDark(color) ? "white" : "black" }]}>{color}</Text>
							</View>
						</View>
					))}
				</View>
			</ViewShot>
			<Pressable
				style={styles.downloadButton}
				onPress={() => {
					const options = {
						url: uri,
						message: "Generated this palette using the #HexSplash app!\nhttps://github.com/ChitrakshTarun/HexSplash",
					};
					Share.open(options);
				}}
			>
				<Ionicons
					name={"share-social-outline"}
					size={32}
					color={"black"}
				/>
				<Text style={{ fontSize: 24 }}>Share</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 30,
		backgroundColor: "#fff",
		gap: 64,
		alignItems: "center",
	},
	headerText: {
		fontSize: 20,
		fontFamily: "Merienda_800ExtraBold",
	},
	paletteContainer: {
		width: "95%",
		backgroundColor: "#fff",
		aspectRatio: 1,
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	paletteElementContainer: {
		flexDirection: "row",
		flex: 1,
		height: 40,
		width: "100%",
		borderRadius: 20,
		gap: 20,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	colorText: {
		fontSize: 22,
		fontWeight: "bold",
		left: 5,
		top: 5,
	},
	downloadButton: {
		flexDirection: "row",
		alignItems: "center",
		gap: 10,
		borderRadius: 12,
		borderWidth: 1,
		padding: 10,
	},
});

export default SharePalette;
