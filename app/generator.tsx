import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Generator = () => {
	const getRandomHexCode = (): string => {
		const letters = "0123456789ABCDEF";
		let hexCode = "#";
		for (let i = 0; i < 6; i++) {
			hexCode += letters[Math.floor(Math.random() * 16)];
		}
		// console.log(hexCode);
		return hexCode;
	};

	const [color1, setColor1] = useState<string>(getRandomHexCode);
	const [color2, setColor2] = useState<string>(getRandomHexCode);
	const [color3, setColor3] = useState<string>(getRandomHexCode);
	const [color4, setColor4] = useState<string>(getRandomHexCode);
	const [color5, setColor5] = useState<string>(getRandomHexCode);

	const [lock, setLock] = useState<boolean>(false);

	/* 
    Copilot clutched out on this code. 
    This function 
    */
	const isColorDark = (color: string) => {
		const c = color.substring(1);
		const rgb = parseInt(c, 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = (rgb >> 0) & 0xff;
		const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		return luma < 128;
	};

	const generateRandomHexCodes = (): void => {
		setColor1(getRandomHexCode());
		setColor2(getRandomHexCode());
		setColor3(getRandomHexCode());
		setColor4(getRandomHexCode());
		setColor5(getRandomHexCode());
		// console.log(color1, color2, color3, color4, color5);
	};

	const testFunction = (): void => {
		console.log("Hello World!");
	};

	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			<Pressable
				onPress={() => setColor1(getRandomHexCode)}
				style={[styles.view, { backgroundColor: color1 }]}
			>
				<Text
					style={[
						styles.text,
						{ color: isColorDark(color1) ? "white" : "black" },
					]}
				>
					{color1}
				</Text>

				<Ionicons
					name="lock-closed"
					color={isColorDark(color1) ? "white" : "black"}
					size={28}
				/>
			</Pressable>
			<Pressable
				onPress={() => setColor2(getRandomHexCode)}
				style={[styles.view, { backgroundColor: color2 }]}
			>
				<Text
					style={[
						styles.text,
						{ color: isColorDark(color2) ? "white" : "black" },
					]}
				>
					{color2}
				</Text>
				<Ionicons
					name="lock-closed"
					color={isColorDark(color2) ? "white" : "black"}
					size={28}
				/>
			</Pressable>
			<Pressable
				onPress={() => setColor3(getRandomHexCode)}
				style={[styles.view, { backgroundColor: color3 }]}
			>
				<Text
					style={[
						styles.text,
						{ color: isColorDark(color3) ? "white" : "black" },
					]}
				>
					{color3}
				</Text>
				<Ionicons
					name="lock-closed"
					color={isColorDark(color3) ? "white" : "black"}
					size={28}
				/>
			</Pressable>
			<Pressable
				onPress={() => setColor4(getRandomHexCode)}
				style={[styles.view, { backgroundColor: color4 }]}
			>
				<Text
					style={[
						styles.text,
						{ color: isColorDark(color4) ? "white" : "black" },
					]}
				>
					{color4}
				</Text>
				<Ionicons
					name="lock-closed"
					color={isColorDark(color4) ? "white" : "black"}
					size={28}
				/>
			</Pressable>
			<Pressable
				onPress={() => setColor5(getRandomHexCode)}
				style={[styles.view, { backgroundColor: color5 }]}
			>
				<Text
					style={[
						styles.text,
						{ color: isColorDark(color5) ? "white" : "black" },
					]}
				>
					{color5}
				</Text>
				<Ionicons
					name="lock-closed"
					color={isColorDark(color5) ? "white" : "black"}
					size={28}
				/>
			</Pressable>
			<View style={styles.buttonsContainer}>
				<Pressable
					style={styles.button}
					onPress={generateRandomHexCodes}
				>
					<Text style={styles.buttonText}>Generate</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default Generator;

const styles = StyleSheet.create({
	container: {
		// marginHorizontal: 10,
		flex: 1,
	},
	view: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 30,
	},
	text: {
		fontSize: 28,
		fontWeight: "bold",
		flex: 1,
		alignItems: "center",
	},
	buttonsContainer: {
		flex: 0.25,
		flexDirection: "row",
		justifyContent: "space-around",
		marginVertical: 20,
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	buttonText: {
		fontSize: 16,
	},
});
