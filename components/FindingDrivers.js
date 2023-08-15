import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ImageBackground,
	TouchableHighlight,
	ScrollView,
	Button,
	FlatList
} from "react-native";
import bg from "../assets/images/bg2.png";
import user from "../assets/images/avatar2.jpeg";

import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue,child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

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

const FindingDrivers = (props) => {
	const navigation = useNavigation();
	//  const { navigation, route } = props;
	 const [tasksList, setTasksList] = useState([],[]);
	
	 const [selectedId, setSelectedId] = useState();
	 const [Driverphone, setDriverphone] = useState()
	const [pickUp, setpickUp] = useState();
	const [destination, setdestination] = useState();
	
	const list = [];

	useEffect(() => {
		const db = getDatabase();
		
		// const Ref = getDatabase().ref("Drivers");
		onValue(ref(db, "DriverPosts/"), (querySnapShot) => {
			querySnapShot.forEach((chidSnapshot)=>{
					let data = chidSnapshot.val() || {};
					
					

					

					for (let key in data ? data : []) {
						list.push({ key, ...data[key] });
					}
					
					setTasksList(list ,list);
					

			})
		
				
				
				
				
		});
		
		
	}, []);
const renderTask = ({ item }) => {
	return (
		<DriversCards
			Pickup={item.Pickup}
			Destination={item.Destination}
			DriverNumber={item.Fullname}
			profilepic={item.Profilepic}
			carname={item.carName}
			carplate={item.carplate}
			DriverNum={item.DriverNumber}
			Date={item.Date}
			Time={item.Time}
			
			Driverid={async() => {setSelectedId(item.key);
				setDriverphone(item.DriverNumber);
				await SecureStore.setItemAsync("DriverID",item.key)
				await SecureStore.setItemAsync("DriverPhone2",item.DriverNumber)
				
			
			}
			
			
			}
			// address={navigation.navigate("SelectSeat")}
		/>
	);
	
};
	
console.log(list);
// const databaseRef = firebase.database().ref("DriverPost/");
	// databaseRef.on("value", (snapshot) => {
	// 	const data = snapshot.val();
	// 	console.log(data)
	// 	// Handle the retrieved data here
	// });
	
			
	return (
		<View style={{ backgroundColor: "#2153CC",height:android.height }}>
			<FlatList
			
				data={tasksList}
				renderItem={renderTask}
				keyExtractor={(item) => item.key}
				extraData={selectedId}
			/>
		</View>
	);
};
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:"row",
		with: android.width * 1.2,
		height: android.height * 1.2,
		backgroundColor: "#2153CC",
	},
	image: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		// backgroundColor: "#1F4690",
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,

		fontWeight: "bold",
		textAlign: "center",
	},
	bg: {
		width: android.width,
	},
	box: {
		backgroundColor: "white",
		width: android.width,
		height: 199,
		borderRadius: 32,
		marginTop: 30,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	button: {
		alignItems: "center",
		backgroundColor: "white",

		padding: 13,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: 130,
		marginLeft: 50,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
		borderWidth: 1,
		borderColor: "black",
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#2153CC",
		color: "white",
		padding: 13,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: 130,
		marginLeft: 30,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
	},
});

export default FindingDrivers;
