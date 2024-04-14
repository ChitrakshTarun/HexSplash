import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import InfoModal from "@/components/InfoModal";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

const Generator = () => {
	const router = useRouter();
	/* FUNCTION: Generates a random hex code everytime the function is rendered. */
	const getRandomHexCode = (): string => {
		const letters = "0123456789ABCDEF";
		let hexCode = "#";
		for (let i = 0; i < 6; i++) {
			hexCode += letters[Math.floor(Math.random() * 16)];
		}
		return hexCode;
	};
	/* useStates: InfoModal's visibility | HexCodes | Locks on Colors */
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [colorCode, setColorCode] = useState<string[]>(Array.from({ length: 5 }, () => getRandomHexCode()));
	const [locks, setLocks] = useState<boolean[]>(new Array(5).fill(false));
	/* 
	FUNCTION: Identify if color is light or dark.
	(Copilot clutched out on this code. Function finds the luma of the color and returns if it is < 128. Using this to determine whether the text above the color should be white or black.)
	*/
	const isColorDark = (color: string): boolean => {
		const c = color.substring(1);
		const rgb = parseInt(c, 16);
		const r = (rgb >> 16) & 0xff;
		const g = (rgb >> 8) & 0xff;
		const b = (rgb >> 0) & 0xff;
		const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		return luma < 128;
	};
	const generateRandomHexCodes = (): void => {
		colorCode.forEach((color, index) => {
			if (!locks[index]) {
				/* 
				Needed to copilot to identify how to only set the color code for one of the views.
				TODO: Revise spread operator and more array methods.
				*/
				setColorCode((prevColorCode) => {
					const newColorCode = [...prevColorCode];
					newColorCode[index] = getRandomHexCode();
					return newColorCode;
				});
			}
		});
	};

	return (
		<View style={styles.container}>
			{colorCode.map((color, index) => (
				<Pressable
					key={index}
					onPress={() =>
						locks[index]
							? null
							: setColorCode((prevColors) => {
									const newColors = [...prevColors];
									newColors[index] = getRandomHexCode();
									return newColors;
							  })
					}
					style={[styles.view, { backgroundColor: color }]}
				>
					<Text style={[styles.text, { color: isColorDark(color) ? "white" : "black" }]}>{color}</Text>
					<Pressable
						style={styles.lockContainer}
						onPress={() =>
							setLocks((prevLocks) => {
								const newLocks = [...prevLocks];
								newLocks[index] = !newLocks[index];
								return newLocks;
							})
						}
					>
						<Ionicons
							name={locks[index] ? "lock-closed" : "lock-open"}
							color={isColorDark(color) ? "white" : "black"}
							size={28}
						/>
					</Pressable>
				</Pressable>
			))}
			<View style={styles.buttonsContainer}>
				<Pressable
					onPress={() => {
						setModalVisible(true);
					}}
				>
					<InfoModal
						visible={modalVisible}
						onClose={() => setModalVisible(false)}
					/>
					<Ionicons
						name="information-circle-outline"
						color={"#000000"}
						size={28}
					/>
				</Pressable>
				<Pressable onPress={() => router.push("/settings")}>
					<Ionicons
						name="settings-outline"
						color={"#000000"}
						size={24}
					/>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={generateRandomHexCodes}
				>
					<Text style={styles.buttonText}>Generate</Text>
				</Pressable>

				<Pressable
					onPress={() => {
						setLocks([false]);
					}}
				>
					<Ionicons
						name="lock-open-outline"
						color={"#000000"}
						size={24}
					/>
				</Pressable>
				<Pressable
					onPress={() => {
						router.push({
							pathname: "/sharepalette",
							/* 
							TODO: Rewrite this section of the code to pass the entire array instead of individually doing it.
							*/
							params: {
								color1: colorCode[0],
								color2: colorCode[1],
								color3: colorCode[2],
								color4: colorCode[3],
								color5: colorCode[4],
							},
						});
					}}
				>
					<Ionicons
						name="share-outline"
						color={"#000000"}
						size={24}
					/>
				</Pressable>
			</View>
		</View>
	);
};

export default Generator;

const styles = StyleSheet.create({
	container: {
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
		backgroundColor: Colors.light.background,
		flex: 0.3,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 14,
		paddingHorizontal: 5,
	},
	button: {
		paddingHorizontal: 20,
	},
	buttonText: {
		fontSize: 18,
	},
	lockContainer: {
		position: "absolute",
		right: 30,
		padding: 10,
	},
});
