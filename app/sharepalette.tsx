import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import Share from "react-native-share";

/* 
TODO: Add Download functionality as well. Save to an album named HexSplash into the user's gallery.
TODO: Improve UI of this page as well as the way the color palette looks.
*/
const SharePalette = () => {
	const { color1, color2, color3, color4, color5 } = useLocalSearchParams();
	const ref = useRef();
	const [uri, setUri] = useState<string>("Test");
	useEffect(() => {
		ref.current.capture().then((uri: any) => {
			console.log("Captured URI", uri);
			setUri(uri);
		});
	}, []);
	return (
		<View style={styles.container}>
			<ViewShot ref={ref}>
				<View style={styles.paletteContainer}>
					<Text style={styles.headerText}>My Color Palette | HexSplash</Text>
					<View style={styles.paletteElementContainer}>
						<View style={{ backgroundColor: color1.toString(), width: 40, height: 40 }}></View>
						<Text style={styles.colorText}>{color1}</Text>
					</View>
					<View style={styles.paletteElementContainer}>
						<View style={{ backgroundColor: color2.toString(), width: 40, height: 40 }}></View>
						<Text style={styles.colorText}>{color2}</Text>
					</View>
					<View style={styles.paletteElementContainer}>
						<View style={{ backgroundColor: color3.toString(), width: 40, height: 40 }}></View>
						<Text style={styles.colorText}>{color3}</Text>
					</View>
					<View style={styles.paletteElementContainer}>
						<View style={{ backgroundColor: color4.toString(), width: 40, height: 40 }}></View>
						<Text style={styles.colorText}>{color4}</Text>
					</View>
					<View style={styles.paletteElementContainer}>
						<View style={{ backgroundColor: color5.toString(), width: 40, height: 40 }}></View>
						<Text style={styles.colorText}>{color5}</Text>
					</View>
				</View>
			</ViewShot>
			<Pressable
				style={styles.downloadButton}
				onPress={() => {
					/* 
					TODO: Fix not working on first press
					*/
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
		backgroundColor: "#fff",
		justifyContent: "center",
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
		borderRadius: 12,
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "flex-start",
		paddingHorizontal: 30,
		gap: 20,
	},
	paletteElementContainer: {
		flexDirection: "row",
		height: 40,
		width: "90%",
		borderRadius: 20,
		gap: 20,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	colorText: {
		fontSize: 22,
		color: "#000",
		fontWeight: "bold",
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
