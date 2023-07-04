import React, { Component } from "react";
import { StyleSheet, View, Image, Text,Button,Dimensions,ImageBackground,TouchableHighlight } from "react-native";
import Car from '../assets/car.png'
import bg from "../assets/images/bg.png";
import MapVieww from "./CurrentLocation";

function SelectSeat(props) {
	return (
		<View style={styles.container}>
			<View style={styles.map}>
				<MapVieww />
			</View>

			{/* <Button
				style={styles.cupertinoButtonPurple}
			></Button> */}
			<View
				style={{
					backgroundColor: "#2153CC",
					borderTopStartRadius: 15,
					borderTopEndRadius: 15,
					paddingBottom: 300,
				}}
			>
				<View style={{ flexDirection: "row", marginStart: 5, marginTop: 10 }}>
					<View
						style={{ backgroundColor: "blue", padding: 10, width: 10 }}
					></View>
					<Text style={{ marginStart: 3, color: "#fff" }}>Male</Text>
				</View>
				<View style={{ flexDirection: "row", marginStart: 5 }}>
					<View
						style={{ backgroundColor: "pink", padding: 10, width: 10 }}
					></View>
					<Text style={{ marginStart: 3, color: "#fff" }}>Female</Text>
				</View>
				<View style={{ flexDirection: "row", marginStart: 5 }}>
					<View
						style={{ backgroundColor: "yellow", padding: 10, width: 10 }}
					></View>
					<Text style={{ marginStart: 3, color: "#fff" }}>Driver</Text>
				</View>
				<View style={styles.group2}>
					<View style={styles.rectRow}>
						<View style={styles.rect}>
							<Text style={styles.loremIpsum}>1</Text>
						</View>

						<View style={styles.rect1}>
							<Text style={styles.driver}>Driver</Text>
						</View>
					</View>
					<View style={styles.rect2Row}>
						<View style={styles.rect2}>
							<Text style={styles.loremIpsum2}>2</Text>
						</View>
						<View style={styles.rect3}>
							<Text style={styles.loremIpsum3}>3</Text>
						</View>
						<View style={styles.rect4}>
							<Text style={styles.loremIpsum4}>4</Text>
						</View>
					</View>
				</View>
				<TouchableHighlight
					onPress={() => {
						props.navigation.replace("RouteScreen");
					}}
				>
					<View style={styles.button}>
						<Text style={{ color: "#2153CC", fontWeight: "bold" }}>Done</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	);
}
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	map: {
		height: "42%",
		// marginBottom: -10,
	},
	container: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#ffff",
		color: "white",
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: android.width * 0.94,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,

		marginTop: 60,
	},
	image: {
		position: "absolute",
		height: 200,
		width: android.width,
		top: 11,
		left: 0,
		right: 0,
	},
	loremIpsum1: {
		top: 0,
		left: 34,
		position: "absolute",

		color: "rgba(255,255,255,1)",
		fontSize: 18,
	},
	imageStack: {
		height: 284,
		marginTop: 39,
	},
	rect7: {
		width: 17,
		height: 21,
		backgroundColor: "rgba(248,231,28,1)",
	},
	driver2: {
		color: "#121212",
		fontSize: 12,
		marginLeft: 9,
		marginTop: 4,
	},
	group2: {
		width: 317,
		height: 194,
	},
	rectRow: {
		height: 70,
		flexDirection: "row",
		marginLeft: 60,
		marginRight: 57,
	},
	rect: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(3,68,142,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 12,
		shadowOpacity: 1,
		shadowRadius: 4,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 11,
		marginTop: 11,
	},
	loremIpsum: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 39,
		marginLeft: 34,
	},
	group: {
		width: 79,
		height: 70,
		marginLeft: 42,
		marginTop: 11,
	},
	rect1: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(248,231,28,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 6,
		shadowOpacity: 1,
		shadowRadius: 2,
		borderWidth: 1,
		borderColor: "rgba(106,104,104,1)",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 49,
		marginTop: 11,
	},
	driver: {
		color: "rgba(5,14,107,1)",
		fontSize: 18,
		marginTop: 24,
		marginLeft: 15,
	},
	rect7Row: {
		height: 81,
		flexDirection: "row",
		marginTop: 87,
		marginLeft: 13,
		marginRight: 79,
	},
	rect2: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(255,121,255,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 9,
		shadowOpacity: 1,
		shadowRadius: 3,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
	},
	loremIpsum2: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 41,
		marginLeft: 34,
	},
	rect3: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(142,141,141,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 9,
		shadowOpacity: 1,
		shadowRadius: 3,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 49,
	},
	loremIpsum3: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 41,
		marginLeft: 34,
	},
	rect4: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(142,141,141,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 9,
		shadowOpacity: 1,
		shadowRadius: 3,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 31,
	},
	loremIpsum4: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 41,
		marginLeft: 34,
	},
	rect2Row: {
		height: 70,
		flexDirection: "row",
		marginTop: 53,
		marginLeft: 22,
		marginRight: 21,
	},
	cupertinoButtonPurple: {
		height: 44,
		width: 257,
		marginTop: 61,
		alignSelf: "center",
	},
	rect5: {
		width: 17,
		height: 21,
		backgroundColor: "rgba(3,68,142,1)",
	},
	male: {
		color: "#121212",
		fontSize: 12,
		marginLeft: 5,
		marginTop: 4,
	},
	rect5Row: {
		height: 21,
		flexDirection: "row",
		marginTop: -389,
		marginLeft: 13,
		marginRight: 299,
	},
	rect6: {
		width: 17,
		height: 21,
		backgroundColor: "rgba(255,121,255,1)",
	},
	female: {
		color: "#121212",
		fontSize: 12,
		marginLeft: 9,
		marginTop: 4,
	},
	rect6Row: {
		height: 21,
		flexDirection: "row",
		marginTop: 19,
		marginLeft: 13,
		marginRight: 282,
	},
});

export default SelectSeat;
