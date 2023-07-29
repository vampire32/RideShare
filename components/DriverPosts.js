import React, { useEffect, useState,useRef } from "react";
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
import { Pressable } from "react-native";
import { Appbar } from "react-native-paper";
import DriversCard2 from "./DriversCard2";
import { useNavigation,useRoute } from "@react-navigation/native";


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
const DriverPosts = (props) => {
	// const { navigation, route } = props;
    const drawer = useRef(null);
     const navigation = useNavigation();
	 const route = useRoute();
	 const [tasksList, setTasksList] = useState([]);
	 const [selectedId, setSelectedId] = useState();
	const [pickUp, setpickUp] = useState();
	const [destination, setdestination] = useState();
	const [DataExist, setDataExist] = useState(false)
	
	

	useEffect(async() => {
		let result=await SecureStore.getItemAsync("PhoneNum")
		console.log(result)
		const db = getDatabase();
		
		// const Ref = getDatabase().ref("Drivers");
		onValue(ref(db, "DriverPosts/"), (querySnapShot) => {
			querySnapShot.forEach((childSnapShot)=>{
				let data = childSnapShot.child("DriverNumber").val();
				if (data==result) {
					let data2 = querySnapShot.val();
					
					
					setDataExist(true);
				} else {
					console.log("Data not Exisit")
					setDataExist(false)
					
				}
			})

				
				
				
				
		});
				
		
		
		
	}, []);
	useEffect(() => {
		const db = getDatabase();
	 if (DataExist == true) {
			onValue(ref(db, "DriverPosts/"), (querySnapShot) => {
				let data = querySnapShot.val() || {};

				const list = [];

				for (let key in data ? data : []) {
					list.push({ key, ...data[key] });
				}
				setTasksList(list);
			});
		} else {
			console.log("DatanotExist");
		}
	}, [DataExist])
	
const renderTask = ({ item }) => {
	return (
		<DriversCard2
			Pickup={item.Pickup}
			Destination={item.Destination}
			DriverNumber={item.Fullname}
			profilepic={item.Profilepic}
			carname={item.carName}
			carplate={item.carplate}
			Driverid={()=>{
                let DriverCardid=item.key
                navigation.push("DriverRouteScreen", {
                    DriverID:DriverCardid,
                });
            }}

			// address={navigation.navigate("SelectSeat")}
		/>
	);
	
};
	
console.log(selectedId);
// const databaseRef = firebase.database().ref("DriverPost/");
	// databaseRef.on("value", (snapshot) => {
	// 	const data = snapshot.val();
	// 	console.log(data)
	// 	// Handle the retrieved data here
	// });
	  const _goBack = () => console.log("Went back");

		const _handleSearch = () => console.log("Searching");

		const _handleMore = () => console.log("Shown more");
  return (
		<>
			{/* <Appbar.Header style={{ backgroundColor: "white" }}>
				<Appbar.Action icon="menu" onPress={_handleSearch} />

				<Appbar.Content title="Driver Posts" />
			</Appbar.Header> */}
			<View style={{ backgroundColor: "#2153CC" }}>
				{DataExist ?(
					<FlatList
					style={{ marginTop: 30 }}
					data={tasksList}
					renderItem={renderTask}
					keyExtractor={(item) => item.key}
					extraData={selectedId}
				/>

				):(
					<Text style={{textAlign:"center",color:"white",paddingTop:10,fontSize:18,fontWeight:"bold"}}>Your not Created Post Please Create a Post</Text>
				)}
				
			</View>
			<View
				style={{
					flex: 1,
					backgroundColor: "#2153CC",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<Pressable
					onPress={() => {
						navigation.navigate("CreatingPost");
					}}
				>
					<Text style={styles.button}>create new Post</Text>
				</Pressable>
			</View>
		</>
	);
}
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
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
		textAlign: "center",
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

		width: 300,

		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
		borderWidth: 1,
		borderColor: "black",
		color: "#2153CC",
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
export default DriverPosts