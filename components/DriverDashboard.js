import React, { useRef, useState,useEffect } from "react";
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
	Dimensions
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
const android = Dimensions.get("window");
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

const DriverDashboard = (props) => {
	const { navigation, route } = props;
	  const drawer = useRef(null);
		const [drawerPosition, setDrawerPosition] = useState("left");
		const [dataExists, setDataExists] = useState(false);
		const [DriverID, setDriverID] = useState("")
		const [DriverName, setDriverName] = useState("")
		useEffect(() => {
			const fetch=async()=>{
				let result = await SecureStore.getItemAsync("PhoneNum");
				const db = getDatabase();

				onValue(ref(db, "Seats/"), (querySnapShot) => {
					querySnapShot.forEach((chideSnapshot) => {
						let data2 = chideSnapshot.child("DriverID").val();
						console.log(data2);
						setDriverID(data2);
						console.log(DriverID);
					});
				});
				onValue(ref(db, `DriverPosts/${DriverID}`), (querySnapShot) => {
					let data = querySnapShot.exists();
					console.log(data);
					setDataExists(data);
				});
				onValue(ref(db, `Drivers${result}/BasicInfo`), (querySnapShot) => {
					let data = querySnapShot.val() || {};
					setDriverName(data.Fullname);
				});

			}
			fetch()
			
		 
		}, [])
		
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
							<Text style={styles.nameText}>{DriverName}</Text>
							
						</View>
					</View>

					
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
						navigation.replace("DriverProfile");
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
				
				
				
			</View>
		);
		const Item = ({ title, component }) => (
			<View style={styles.item}>
				
			</View>
		);
	return (
		<>
			<DrawerLayoutAndroid
				ref={drawer}
				drawerWidth={300}
				drawerPosition={drawerPosition}
				renderNavigationView={navigationView}
			>
				<View style={{ flex: 0.25 }}>
					<View style={styles.floatTopButton}>
						<Pressable onPress={() => drawer.current.openDrawer()}>
							<EvilIcons name="navicon" size={30} color="#1F4690" />
						</Pressable>
						<Text style={{marginLeft:"30%",fontSize:20,fontWeight:"bold"}}>Driver Post</Text>
					</View>
				</View>
				
				<DriverPosts />
			</DrawerLayoutAndroid>
		</>
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
		flexDirection:"row",
		
		top: 25,
		left:10,
		
		width: android.width,
		
		backgroundColor: "#ffff",
		zIndex: 4,
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingVertical:20,

		
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
