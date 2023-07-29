import React,{useState,useEffect} from 'react'
import { View, Text } from "react-native";
import ActionSheet from './ActionSheet';
import UserandDriverLocation from './UserandDriverLocation';
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";

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



const RouteScreen = (props) => {
	const [tripEnd, settripEnd] = useState(false)
	useEffect(async() => {
		let result=await SecureStore.getItemAsync("PhoneNum")
		const db=getDatabase()
		
		onValue(ref(db, `TripisEnd/${result}`),(querySnapShot)=>{
			let data=querySnapShot.val()
			let data2=querySnapShot.exists()
			console.log(data)
			if (data2==true) {
				settripEnd(data.tripStatus);
			} else {
				settripEnd(false)
				
			}
			
		});
	
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
		<UserandDriverLocation/>
		<ActionSheet/>
			
			
		
			
			
		</>
	);
}

export default RouteScreen