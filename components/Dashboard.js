import React,{useState,useEffect} from "react";
import { Pressable, View, StyleSheet, ImageBackground,RefreshControl, ScrollView,Text,ActivityIndicator } from "react-native";

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
		const [location, setlocation] = useState(null)
		const [Address, setAddress] = useState(null)
		const [livelatitude, setlivelatitude] = useState(null)
		const [liveLongitude, setliveLongitude] = useState(null)

	 const onRefresh = React.useCallback(() => {
			setRefreshing(true);
			setTimeout(() => {
				setRefreshing(false);
			}, 2000);
		}, []);
	useEffect(() => {
		const fetch=async()=>{
			try {
				let { status } = await Location.requestForegroundPermissionsAsync();
				if (status !== "granted") {
					return;
				}
				let location = await Location.getCurrentPositionAsync({});
				this.updateState(location);
			} catch (error) {
				console.log(error);
			}
			const subscription = Location.watchPositionAsync(
				{
					accuracy: Location.Accuracy.High,
					timeInterval: 1000, // Update every 1 second
				},
				async (newLocation) => {
					
					const addressResponse = await LocationGeocoding.reverseGeocodeAsync(
						newLocation.coords
					);

					setAddress(addressResponse[0].name+addressResponse[0].region)
					setlocation(newLocation)
				}
			);
			subscription;
			let result = await SecureStore.getItemAsync("PhoneNum");
			const db = getDatabase();
			onValue(ref(db, `UserPosts/${result}`), (querSnapShot) => {
				let data2 = querSnapShot.exists();
				console.log(data2)
				onValue(ref(db, `TripisEnd/${result}`), (querySnapShot) => {
					let data3 = querySnapShot.val();
					let data4 = querySnapShot.exists();
					console.log(data3);
					if (data2 == true) {
					navigation.navigate("RouteScreen");
				} 
				else if (data4==true) {
					navigation.navigate("SuccefulPage");
				}
				else {
					navigation.navigate("Dashboard");

				}
				});
				
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
		<>
			{location && location.coords ? (
				<View>
					<Pressable style={styles.floatTopButton} onPress={openDrawer}>
						<EvilIcons name="navicon" size={30} color="#2153CC" />
					</Pressable>
					<View style={styles.map}>
						<MapVieww
							latitude={location.coords.latitude}
							longtitude={location.coords.longitude}
						/>
					</View>
					<View style={styles.bottomContainer}>
						<HomeSearch Address={Address} />
					</View>
				</View>
			) : (
				<View
					style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
				>
					<Text style={{ textAlign: "center", fontSize: 22 }}>
						RideShare......
					</Text>
					<ActivityIndicator size={70} color="#0000ff" />
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	map: {
		height: "60%",
		// marginBottom: -10,
	},
	bottomContainer: {
		height: "45%",
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
