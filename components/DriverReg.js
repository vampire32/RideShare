import React,{useState,useEffect} from 'react'
import { View,Text,Dimensions,StyleSheet,Pressable } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

import firebase from "firebase/compat/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import user from "../assets/images/avatar2.jpeg";
import * as ImagePicker from "expo-image-picker";

import * as SecureStore from "expo-secure-store";

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
const android = Dimensions.get("window");
const DriverReg = (props) => {
	const { navigation, route } = props;
	useEffect(() => {
		const FecthData = async () => {
			let result = await SecureStore.getItemAsync("PhoneNum");
			const db = getDatabase();
			onValue(ref(db, `Drivers/${result}/CINCinfo`), (querySnapShot) => {
				let data = querySnapShot.exists();
				if (data == true) {
					navigation.replace("DriverDashboard");
				} else {
					console.log("Data not Exist");
				}
			});
		};
		FecthData();
	 
	}, [])
	

  return (
		<View style={styles.container}>
			<Text
				style={{
					marginTop: "15%",
					textAlign: "center",
					fontSize: 28,
					fontWeight: "bold",
					color:"white"
				}}
			>
				Welcome To Driver Mode
			</Text>

			<View
				style={{
					backgroundColor: "#ffff",
					elevation: 7,
					borderRadius: 20,
					paddingBottom: 20,
					marginTop: 50,
				}}
			>
				<Pressable
					onPress={() => {
						navigation.replace("BasicInfo");
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
						<Icon name="info" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Basic Information
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("VechlieInfo");
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
						<Icon name="drive-eta" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Vechlie Information
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("IdConfrim");
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
						<Icon name="badge" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							ID Confirmation
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("DriverLicense");
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
						<Icon name="badge" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Driver Licence
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("CNIC");
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
						<Icon name="badge" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							CNIC
						</Text>
					</View>
				</Pressable>
			</View>
			<Pressable onPress={()=>{
				navigation.replace("DriverDashboard");
			}}>
				<Text style={styles.button}>Confirm</Text>
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height * 1.5,
		backgroundColor: "#2153CC",
	},
	Text: {
		color: "#ffff",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#fff",
		color: "#2153CC",
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
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",

		marginTop: "50%",
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
});

export default DriverReg
