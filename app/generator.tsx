import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import InfoModal from "@/components/InfoModal";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

const Generator = () => {
	const router = useRouter();
	const getRandomHexCode = (): string => {
		const letters = "0123456789ABCDEF";
		let hexCode = "#";
		for (let i = 0; i < 6; i++) {
			hexCode += letters[Math.floor(Math.random() * 16)];
		}
		return hexCode;
	};

	const [modalVisible, setModalVisible] = useState(false);

	const [color1, setColor1] = useState<string>(getRandomHexCode);
	const [color2, setColor2] = useState<string>(getRandomHexCode);
	const [color3, setColor3] = useState<string>(getRandomHexCode);
	const [color4, setColor4] = useState<string>(getRandomHexCode);
	const [color5, setColor5] = useState<string>(getRandomHexCode);

	const [lock1, setLock1] = useState<boolean>(false);
	const [lock2, setLock2] = useState<boolean>(false);
	const [lock3, setLock3] = useState<boolean>(false);
	const [lock4, setLock4] = useState<boolean>(false);
	const [lock5, setLock5] = useState<boolean>(false);

	/* 
		Copilot clutched out on this code. 
		Function finds the luma of the color and returns if it is < 128.
		Using this to determine whether the text above the color should be white or black.
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
		lock1 ? null : setColor1(getRandomHexCode());
		lock2 ? null : setColor2(getRandomHexCode());
		lock3 ? null : setColor3(getRandomHexCode());
		lock4 ? null : setColor4(getRandomHexCode());
		lock5 ? null : setColor5(getRandomHexCode());
	};

	const testFunction = (): void => {
		console.log("Hello World!");
	};

	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			{/* VIEW 1 */}
			<Pressable
				onPress={() => (lock1 ? null : setColor1(getRandomHexCode))}
				style={[styles.view, { backgroundColor: color1 }]}
			>
				<Text style={[styles.text, { color: isColorDark(color1) ? "white" : "black" }]}>{color1}</Text>
				<Pressable
					style={styles.lockContainer}
					onPress={() => (lock1 ? setLock1(false) : setLock1(true))}
				>
					<Ionicons
						name={lock1 ? "lock-closed" : "lock-open"}
						color={isColorDark(color1) ? "white" : "black"}
						size={28}
					/>
				</Pressable>
			</Pressable>
			{/* VIEW 2 */}
			<Pressable
				onPress={() => (lock2 ? null : setColor2(getRandomHexCode))}
				style={[styles.view, { backgroundColor: color2 }]}
			>
				<Text style={[styles.text, { color: isColorDark(color2) ? "white" : "black" }]}>{color2}</Text>
				<Pressable
					style={styles.lockContainer}
					onPress={() => (lock2 ? setLock2(false) : setLock2(true))}
				>
					<Ionicons
						name={lock2 ? "lock-closed" : "lock-open"}
						color={isColorDark(color2) ? "white" : "black"}
						size={28}
					/>
				</Pressable>
			</Pressable>
			{/* VIEW 3 */}
			<Pressable
				onPress={() => (lock3 ? null : setColor3(getRandomHexCode))}
				style={[styles.view, { backgroundColor: color3 }]}
			>
				<Text style={[styles.text, { color: isColorDark(color3) ? "white" : "black" }]}>{color3}</Text>
				<Pressable
					style={styles.lockContainer}
					onPress={() => (lock3 ? setLock3(false) : setLock3(true))}
				>
					<Ionicons
						name={lock3 ? "lock-closed" : "lock-open"}
						color={isColorDark(color3) ? "white" : "black"}
						size={28}
					/>
				</Pressable>
			</Pressable>
			{/* VIEW 4 */}
			<Pressable
				onPress={() => (lock4 ? null : setColor4(getRandomHexCode))}
				style={[styles.view, { backgroundColor: color4 }]}
			>
				<Text style={[styles.text, { color: isColorDark(color4) ? "white" : "black" }]}>{color4}</Text>
				<Pressable
					style={styles.lockContainer}
					onPress={() => (lock4 ? setLock4(false) : setLock4(true))}
				>
					<Ionicons
						name={lock4 ? "lock-closed" : "lock-open"}
						color={isColorDark(color4) ? "white" : "black"}
						size={28}
						onPress={() => (lock4 ? setLock4(false) : setLock4(true))}
					/>
				</Pressable>
			</Pressable>
			{/* VIEW 5 */}
			<Pressable
				onPress={() => (lock5 ? null : setColor5(getRandomHexCode))}
				style={[styles.view, { backgroundColor: color5 }]}
			>
				<Text style={[styles.text, { color: isColorDark(color5) ? "white" : "black" }]}>{color5}</Text>
				<Pressable
					style={styles.lockContainer}
					onPress={() => (lock5 ? setLock5(false) : setLock5(true))}
				>
					<Ionicons
						name={lock5 ? "lock-closed" : "lock-open"}
						color={isColorDark(color5) ? "white" : "black"}
						size={28}
					/>
				</Pressable>
			</Pressable>
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
						setLock1(false);
						setLock2(false);
						setLock3(false);
						setLock4(false);
						setLock5(false);
					}}
				>
					<Ionicons
						name="lock-open-outline"
						color={"#000000"}
						size={22}
					/>
				</Pressable>
				<Pressable
					onPress={() => {
						router.push({
							pathname: "/sharepalette",
							params: {
								color1: color1,
								color2: color2,
								color3: color3,
								color4: color4,
								color5: color5,
							},
						});
					}}
				>
					<Ionicons
						name="share-outline"
						color={"#000000"}
						size={22}
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
		flex: 0.25,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		paddingVertical: 14,
		// gap: 8,
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
