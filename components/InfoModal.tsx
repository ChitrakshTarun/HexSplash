import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

interface InfoModalProps {
	visible: boolean;
	onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
	return (
		<Modal
			style={styles.container}
			animationType="slide"
			visible={visible}
			transparent={true}
			onRequestClose={onClose}
		>
			<TouchableOpacity
				style={styles.modalOverlay}
				onPress={onClose}
			>
				<View style={styles.modalContent}>
					<StatusBar hidden={true} />
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome to HexSplash!</Text>
					<Image
						source={require("../assets/images/ColorView.png")}
						style={{ width: "100%", height: "30%" }}
						resizeMode="contain"
					/>
					<Text style={styles.contentText}>
						Click on the color view to change it to a randomised color, or click the Generate button below to randomise all.
					</Text>
					<Text>{"    "}</Text>
					<Text style={styles.contentText}>
						Click the Lock (
						<Ionicons
							name="lock-open-outline"
							color={"#000000"}
							size={16}
						/>
						{" // "}
						<Ionicons
							name="lock-closed-outline"
							color={"#000000"}
							size={16}
						/>
						) to lock or unlock the view from being randomised.
					</Text>

					<Image
						source={require("../assets/images/BottomBar.png")}
						style={{ width: "100%", height: "16%" }}
						resizeMode="contain"
					/>
					<Text style={styles.contentText}>
						<Ionicons
							name="information-circle-outline"
							color={"#000000"}
							size={16}
						/>
						{"    "}
						View this modal
					</Text>
					<Text>{"    "}</Text>
					<Text style={styles.contentText}>
						<Ionicons
							name="settings-outline"
							color={"#000000"}
							size={16}
						/>
						{"    "}
						App Settings
					</Text>
					<Text>{"    "}</Text>
					<Text style={styles.contentText}>
						<Ionicons
							name="lock-open-outline"
							color={"#000000"}
							size={16}
						/>
						{"    "}
						Unlock all locks
					</Text>
					<Text>{"    "}</Text>
					<Text style={styles.contentText}>
						<Ionicons
							name="share-outline"
							color={"#000000"}
							size={16}
						/>
						{"    "}
						Export your palette
					</Text>
				</View>
			</TouchableOpacity>
		</Modal>
	);
};

export default InfoModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		height: "auto",
		width: "85%",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
	},
	contentText: {
		fontSize: 16,
	},
});
