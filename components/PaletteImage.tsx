// // Import required libraries
// import React from "react";
// import { ColorValue, View, StyleSheet } from "react-native";
// import { Svg, Circle, Text } from "react-native-svg";

// interface PaletteProps {
// 	color1: ColorValue;
// 	color2: ColorValue;
// 	color3: ColorValue;
// 	color4: ColorValue;
// 	color5: ColorValue;
// }
// const PaletteImage: React.FC<PaletteProps> = ({ color1, color2, color3, color4, color5 }) => {
// 	return (
// 		<View style={styles.container}>
// 			<Svg
// 				width="100%"
// 				height="1000"
// 			>
// 				<Circle
// 					cx="50"
// 					cy="50"
// 					r="25"
// 					fill={color1}
// 				/>
// 				<Circle
// 					cx="50"
// 					cy="125"
// 					r="25"
// 					fill={color2}
// 				/>
// 				<Circle
// 					cx="50"
// 					cy="190"
// 					r="25"
// 					fill={color3}
// 				/>
// 				<Circle
// 					cx="50"
// 					cy="260"
// 					r="25"
// 					fill={color4}
// 				/>
// 				<Circle
// 					cx="50"
// 					cy="330"
// 					r="25"
// 					fill={color5}
// 				/>

// 				<Text
// 					x="125"
// 					y="60"
// 					fill="#000000"
// 					fontSize={20}
// 				>
// 					{color1.toString()}
// 				</Text>
// 				<Text
// 					x="125"
// 					y="125"
// 					fill="#000000"
// 					fontSize={20}
// 				>
// 					{color2.toString()}
// 				</Text>
// 				<Text
// 					x="125"
// 					y="190"
// 					fill="#000000"
// 					fontSize={20}
// 				>
// 					{color3.toString()}
// 				</Text>
// 				<Text
// 					x="125"
// 					y="260"
// 					fill="#000000"
// 					fontSize={20}
// 				>
// 					{color4.toString()}
// 				</Text>
// 				<Text
// 					x="125"
// 					y="330"
// 					fill="#000000"
// 					fontSize={20}
// 				>
// 					{color5.toString()}
// 				</Text>
// 			</Svg>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		borderWidth: 1,
// 		borderColor: "#000000",
// 		borderRadius: 10,
// 		overflow: "hidden",
// 		width: "80%",
// 		height: "80%",
// 	},
// });

// export default PaletteImage;
