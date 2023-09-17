import React, { useRef, useState, useEffect } from "react";
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
	ActivityIndicator,
} from "react-native";

import HomeSearch from "./HomeSearch";
import bg from "../assets/images/bg2.png";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Colors from "../assets/constants/Colors";
import MapVieww from "./CurrentLocation";
import HomeSearchDrivers from "./HomeSearchDrivers";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";
import DriverRouteScreen from "./DriverRouteScreen";
import DriverPosts from "./DriverPosts";
import * as LocationGeocoding from "expo-location";
import * as Location from "expo-location";

const firebaseConfig = {
	apiKey: "AIzaSyC-tsScYuvKuNwGFpFEBQhBft-FZBhzRww",
	authDomain: "carsharing2-d254d.firebaseapp.com",
	projectId: "carsharing2-d254d",
	storageBucket: "carsharing2-d254d.appspot.com",
	messagingSenderId: "450530782923",
	appId: "1:450530782923:web:43786c1b9a42666e40b54e",
	measurementId: "G-VVEWZZGFBT",
};
const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);

const Timer = () => {
	const [remainingTime, setRemainingTime] = useState(0); // Remaining time in seconds
	const endTime = new Date(); // Set your desired end time here

	useEffect(() => {
		const fetch = async () => {
			let result = await SecureStore.getItemAsync("DriverPhone2");

			let result2 = await SecureStore.getItemAsync("DriverID");
			const db = getDatabase();
			onValue(ref(db, `DriverPosts/${result}/${result2}`), (querySnapShot) => {
				let data = querySnapShot.val();
				console.log(data.Time);
				const interval = setInterval(() => {
					const currentTime = new Date();
					let endtime = data.Time;
					const [hours, minutes] = data.Time.split(":");
					const currentDate = new Date();
					const year = currentDate.getFullYear();
					const month = currentDate.getMonth();
					const day = currentDate.getDate();
                    const timeDate = new Date(year, month, day, parseInt(hours), parseInt(minutes));
                    

					const timeDifference = timeDate - currentTime;

					if (timeDifference <= 0) {
						clearInterval(interval);
						setRemainingTime(0);
					} else {
						setRemainingTime(Math.floor(timeDifference / 1000)); // Convert to seconds
					}
				}, 1000);

				return () => clearInterval(interval);
			});
		};
		fetch();

		// Clean up interval when component unmounts
	}, []);
	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const formattedSeconds = seconds % 60;
		return `${minutes}:${formattedSeconds < 10 ? "0" : ""}${formattedSeconds}`;
	};
	return (
		
			<View >
				<Text style={{textAlign:"center"}}>Remaining Time: {formatTime(remainingTime)}</Text>
				{remainingTime === 0 && <Text style={{textAlign:"center"}}>Time's up! Call The rider</Text>}
			</View>
		
	);
};
const styles = StyleSheet.create({
	map: {
		height: "100%",
		// marginBottom: -10,
	},
	bottomContainer: {
		height: "100%",
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
	transparentBox: {
        marginTop:10,
		backgroundColor: "rgba(255, 0, 0, 0.1)", // Red color with 50% opacity
		padding: 20,
		borderRadius: 10,
	},
});
export default Timer;
