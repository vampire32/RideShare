import React from "react";
import { Pressable, View, StyleSheet, ImageBackground } from "react-native";

import HomeSearch from "./HomeSearch";
import bg from "../assets/images/bg2.png";

import { useNavigation, DrawerActions } from "@react-navigation/native";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Colors from "../assets/constants/Colors";
import MapVieww from "./CurrentLocation";


const Dashboard = () => {
	const navigation = useNavigation();

	const openDrawer = () => {
		navigation.dispatch(DrawerActions.toggleDrawer());
	};

	return (
		<View>
			<Pressable style={styles.floatTopButton} onPress={openDrawer}>
				<EvilIcons name="navicon" size={30} color="#2153CC" />
			</Pressable>
			<View style={styles.map}>
				<MapVieww />
			</View>
			<View style={styles.bottomContainer}>
				<HomeSearch />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
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
		backgroundColor: "#fff",
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
});

export default Dashboard;
