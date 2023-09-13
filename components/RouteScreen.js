import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet } from "react-native";
import ActionSheet from './ActionSheet';
import UserandDriverLocation from './UserandDriverLocation';
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";
import UserPickDropLocation from './UserPickDropLocation';
import Timer from './Timer';

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



const RouteScreen = (props) => {
	const [tripEnd, settripEnd] = useState(false)
	const [SeatData, setSeatData] = useState(false)
	useEffect(() => {
		const fetch=async()=>{
			let result = await SecureStore.getItemAsync("PhoneNum");
			const db = getDatabase();
			onValue(ref(db,`Seats/${result}/`),(querySnapShot)=>{
				let data=querySnapShot.exists()
				console.log(data)
				setSeatData(data)
			})

			onValue(ref(db, `TripisEnd/${result}`), (querySnapShot) => {
				let data = querySnapShot.val();
				let data2 = querySnapShot.exists();
				console.log(data);
				if (data2 == true) {
					settripEnd(data.tripStatus);
				} else {
					settripEnd(false);
				}
			});

		}
		fetch()
		
	
	}, [])
	useEffect(() => {
		 if (tripEnd == true) {
				props.navigation.navigate("SuccefulPage");
			} else {
				console.log("Trip is not Ended");
			}
	  
	}, [tripEnd])
	
	
  return (
		<>
		{SeatData ?(
			<View>
				<Timer />
				<View style={styles.map}>
					<UserPickDropLocation />
					<ActionSheet />
				</View>
			</View>

		):(
			console.log("failed")
		)}
			
		</>
	);
}
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
		backgroundColor: "rgba(255, 0, 0, 0.5)", // Red color with 50% opacity
		padding: 20,
		borderRadius: 10,
	},
});
export default RouteScreen