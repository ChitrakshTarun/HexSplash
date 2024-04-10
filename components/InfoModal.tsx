import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { configureLayoutAnimations } from "react-native-reanimated/lib/typescript/reanimated2/core";

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
					<Text>InfoModal</Text>
				</View>
			</TouchableOpacity>
		</Modal>
	);
};

export default InfoModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "90%",
		width: "90%",
	},
	modalOverlay: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 10,
	},
});
