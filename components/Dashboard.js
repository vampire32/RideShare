import React,{useState,useEffect} from "react";
import { Pressable, View, StyleSheet, ImageBackground,RefreshControl, ScrollView } from "react-native";

import HomeSearch from "./HomeSearch";
import bg from "../assets/images/bg2.png";

import { useNavigation, DrawerActions, } from "@react-navigation/native";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Colors from "../assets/constants/Colors";
import MapVieww from "./CurrentLocation";
import UserandDriverLocation from "./UserandDriverLocation";
import * as SecureStore from "expo-secure-store";
import firebase from "firebase/compat/app";
import {
	getDatabase,
	ref,
	set,
	get,
	onValue,
	child,
	push,
	remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";




const firebaseConfig = {
	apiKey: "AIzaSyDIA92OSKTB-lKS-xiBoS_EKDrGHlpVJ_Q",
	authDomain: "carsharing-10784.firebaseapp.com",
	projectId: "carsharing-10784",
	storageBucket: "carsharing-10784.appspot.com",
	messagingSenderId: "1059995999394",
	appId: "1:1059995999394:web:f6bc2c89ea71eed547cbfb",
	measurementId: "G-WXGTPM42JS",
};
const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);


const Dashboard = () => {
	const navigation = useNavigation();
	const [lat1, setlat1] = useState();
	const [long1, setlong1] = useState();
	const [lat2, setlat2] = useState();
	const [long2, setlong2] = useState();
	 const [refreshing, setRefreshing] = useState(false);
	 const [DriverID, setDriverID] = useState("");
		const [DriverNum, setDriverNum] = useState("");
		const [IDexist, setIDexist] = useState(false);
	 const onRefresh = React.useCallback(() => {
			setRefreshing(true);
			setTimeout(() => {
				setRefreshing(false);
			}, 2000);
		}, []);
	useEffect(() => {
		const fetch=async()=>{
			let result = await SecureStore.getItemAsync("PhoneNum");
			const db = getDatabase();
			onValue(ref(db, `UserPosts/${result}`), (querSnapShot) => {
				let data2 = querSnapShot.exists();
				if (data2 == true) {
					navigation.navigate("RouteScreen");
				} else {
					navigation.navigate("Dashboard");
				}
			});
			let lat11 = await SecureStore.getItemAsync("lat");
			let long11 = await SecureStore.getItemAsync("long");
			let lat22 = await SecureStore.getItemAsync("lat2");
			let long22 = await SecureStore.getItemAsync("long2");

			setlat1(lat11);
			setlong1(long11);
			setlat2(lat22);
			setlong2(long22);
			console.log(lat1);

		}
		fetch()

	}, [])
	

	const openDrawer = () => {
		navigation.dispatch(DrawerActions.toggleDrawer());
	};

	return (
		<View
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
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
