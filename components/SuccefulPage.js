import React,{useEffect,useState} from 'react'
import { View,Image,Text,Dimensions,StyleSheet } from 'react-native'
import user from "../assets/images/avatar2.jpeg";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-paper";
const android = Dimensions.get("window");
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child,push,remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";
import { Pressable } from 'react-native';
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
const SuccefulPage = () => {
	const navigation = useNavigation();
	const [DriverName, setDriverName] = useState("")
	const [DriverID, setDriverID] = useState("")
	const [DriverNum, setDriverNum] = useState("")
	const [IDexist, setIDexist] = useState(false)
	const [Reviwes, setReviwes] = useState("")
	const [Username, setUsername] = useState("")
	const [Usernumber, setUsernumber] = useState("")
	const [Userpic, setUserpic] = useState("")
	 const handleChangeName = (Reviwes) => {
			setReviwes(Reviwes);
		};
	useEffect(() => {
		const fetch=async()=>{
			let result = await SecureStore.getItemAsync("PhoneNum");
			const db = getDatabase();
			onValue(ref(db, `TripisEnd/${result}`), (querSnapShot) => {
				let data = querSnapShot.val() || {};
				setUsername(data.userName);
							setUsernumber(data.UserPhone);
							setUserpic(data.userPic);
				let data2 = querSnapShot.exists();
				console.log(data2);
				if (data2 == true) {
					onValue(ref(db, `DriverPosts/`), (querSnapShot) => {
						querSnapShot.forEach((childSnapShot) => {
							let data3 = childSnapShot.child(data.Driverid).val() || {};
							setDriverName(data3.Fullname);
							setDriverID(data.Driverid)
						});
					});
				} else {
					console.log("Data is not Exist");
				}

				// setDriverID(data.Driverid);
				// setIDexist(data2);
			});
			// onValue(ref(db, "UserPosts/"), (querySnapShot) => {
			// 	querySnapShot.forEach((childSnapShot) => {
			// 		let data4 = childSnapShot.child("userPhone").val();
			// 		if (data4 == result) {
			// 			let data5 = childSnapShot.val() || {};
			// 			setUsername(data5.Fullname);
			// 			setUsernumber(data5.userPhone);
			// 			setUserpic(data5.userPic);
			// 		} else {
			// 			console.log("user not exist");
			// 		}
			// 	});
			// });

		}
		fetch()
	
	}, [])
	useEffect(() => {
		const db = getDatabase();
	 
	}, [IDexist])
	
	const Submit=()=>{
			const db = getDatabase();
			push(ref(db, "Reviws/"), {
				DriverID:DriverID,
				Username:Username,
				Userpic:Userpic,
				Usernumber:Usernumber,
				Reviwes:Reviwes
			});
			remove(ref(db, `TripisEnd/${Usernumber}`))
				.then(() => {
					console.log("Data removed successfully");
					navigation.navigate("Dashboard")
				})
				.catch((error) => {
					console.error("Error removing data:", error);
				});

		navigation.navigate("Dashboard");
	}
	
  return (
		<View
			style={{
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#1F4690",
				height: "100%",
			}}
		>
			<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>
				Thank You using Ride Share
			</Text>
			
			<Text
				style={{
					fontSize: 18,
					marginTop: 20,
					color: "#fff",
					fontWeight: "bold",
				}}
			>
				{DriverName}
			</Text>

			<Text
				style={{
					fontSize: 18,
					marginTop: 20,
					color: "#fff",
					fontWeight: "bold",
				}}
			>
				Give Your Review
			</Text>
			
			<TextInput
			value={Reviwes}
				placeholder="Reviws"
				style={{
					borderTopLeftRadius: 20,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					width: android.width,
					backgroundColor: "white",
					height: 60,
					borderTopRightRadius: 20,
					shadowColor: "#000",
					
				}}
				onChangeText={handleChangeName}
			/>
			<Pressable onPress={()=>{
				Submit()
			}}>
				<Text style={styles.button}>Done</Text>
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height * 1.5,
	},
	Text: {
		color: "#ffff",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		textAlign:'center',
		alignItems: "center",
		backgroundColor: "#fff",

		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: android.width * 0.94,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,

		marginTop: 10,
	},
	input: {
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		width: android.width * 0.94,
		height: 60,
		borderTopRightRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
	},
	input2: {
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		width: android.width * 0.94,
		height: 60,
		borderTopRightRadius: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
		backgroundColor: "#fff",
	},
});
export default SuccefulPage