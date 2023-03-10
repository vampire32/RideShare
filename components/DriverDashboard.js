import React, { useRef, useState } from "react";
import {
	Button,
	DrawerLayoutAndroid,
	Text,
	StyleSheet,
	View,
	Pressable,
	ImageBackground,
	FlatList,
	StatusBar,
	SafeAreaView,
	TouchableHighlight,
} from "react-native";

import HomeSearch from "./HomeSearch";
import bg from "../assets/images/bg2.png";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";


import EvilIcons from "react-native-vector-icons/EvilIcons";
import Colors from "../assets/constants/Colors";
import MapVieww from "./CurrentLocation";


const DriverDashboard = (props) => {
	const { navigation, route } = props;
	  const drawer = useRef(null);
		const [drawerPosition, setDrawerPosition] = useState("left");
		const changeDrawerPosition = () => {
			if (drawerPosition === "left") {
				setDrawerPosition("right");
			} else {
				setDrawerPosition("left");
			}
		};

		const navigationView = () => (
			<View style={styles.container}>
				<View style={styles.blackContainer}>
					<View
						style={{
							marginBottom: 30,
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<View style={styles.userIconContainer}>
							<FontAwesome name="user" size={28} color={Colors.blackGrey} />
						</View>
						<View>
							<Text style={styles.nameText}>Abdul Moiz</Text>
							<View style={styles.flexRow}>
								<Text style={styles.ratingText}>5.0</Text>
								<FontAwesome name="star" size={8} color={Colors.mediumGrey} />
							</View>
						</View>
					</View>

					<View style={styles.borderContainer}>
						<Pressable
							style={[styles.flexRow, { justifyContent: "space-between" }]}
						>
							<View style={styles.flexRow}>
								<Text style={styles.textBold}>Messages</Text>
								<View style={styles.circle} />
							</View>
							<View>
								<SimpleLineIcons
									name="arrow-right"
									size={15}
									color={Colors.white}
								/>
							</View>
						</Pressable>
					</View>

					<Pressable style={{ marginTop: 10 }}>
						<Text style={styles.textGrey}>Do more with your account</Text>
					</Pressable>

					<Pressable>
						<Text style={styles.text}>Make money driving</Text>
					</Pressable>
				</View>
				<Pressable
					onPress={() => {
						navigation.replace("DriverDashboard");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Home
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("DigitalWallet");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							DigitalWallet
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("Profile");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Setting
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("DriverLicense");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Help
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("CNIC");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							History
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("FindingCustomers");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Ride Requests
						</Text>
					</View>
				</Pressable>
			</View>
		);
		const Item = ({ title, component }) => (
			<View style={styles.item}>
				
			</View>
		);
	return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={300}
			drawerPosition={drawerPosition}
			renderNavigationView={navigationView}
		>
			<View>
				{/* <Button
					title="Open drawer"
					onPress={() => drawer.current.openDrawer()}
				/> */}
				<Pressable
					style={styles.floatTopButton}
					onPress={() => drawer.current.openDrawer()}
				>
					<EvilIcons name="navicon" size={30} color="#fff" />
				</Pressable>
				<View style={styles.map}>
					<MapVieww />
				</View>
				<View style={styles.bottomContainer}>
					<ImageBackground
						style={styles.bottomContainer}
						source={bg}
						resizeMode="cover"
					>
						<HomeSearch />
					</ImageBackground>
				</View>
			</View>
		</DrawerLayoutAndroid>
	);
};
const styles = StyleSheet.create({
	blackContainer: {
		backgroundColor: "#1F4690",
		padding: 15,
		marginBottom: 20,
	},
	userIconContainer: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: Colors.mediumGrey,
		marginRight: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	nameText: {
		fontSize: 22,
		color: Colors.white,
		marginBottom: 4,
	},
	ratingText: {
		color: Colors.mediumGrey,
		marginRight: 4,
	},
	borderContainer: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: Colors.darkGrey,
	},
	flexRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	circle: {
		width: 8,
		height: 8,
		borderRadius: 50,
		backgroundColor: Colors.lightBlue,
		marginLeft: 15,
	},
	textBold: {
		color: Colors.white,
		fontWeight: "600",
		paddingVertical: 15,
	},
	text: {
		color: Colors.white,
		paddingVertical: 5,
	},
	textGrey: {
		color: Colors.darkGrey,
		paddingVertical: 5,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#fcc200",
		color: "white",
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
	},
	map: {
		height: "40%",
		// marginBottom: -10,
	},
	bottomContainer: {
		height: "75%",
		borderTopStartRadius: 15,
		borderTopEndRadius: 15,
	},
	floatTopButton: {
		position: "absolute",
		top: 50,
		left: 20,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "#fcc200",
		zIndex: 4,
		justifyContent: "center",
		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
	},
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});
export default DriverDashboard;
