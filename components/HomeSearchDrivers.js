import React, { useState,useEffect } from "react";
import {
	Text,
	View,
	ImageBackground,
	Button,
	StyleSheet,
	Dimensions,
	TouchableHighlight,
	KeyboardAvoidingView,
	TouchableOpacity,
	Modal,
} from "react-native";

import { TextInput } from "react-native-paper";
import bg from "../assets/images/bg2.png";
import * as SecureStore from "expo-secure-store";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import Colors from "../assets/constants/Colors";

import firebase from "firebase/compat/app";
import { getDatabase, ref, set,push,child ,update,onValue} from "firebase/database";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { getAuth } from "firebase/auth";
import { Time } from "react-native-gifted-chat";
import { useNavigation } from "@react-navigation/native";


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
const auth = getAuth(app);
const HomeSearchDrivers = (props) => {
	const navigation = useNavigation();
	const [date, setDate] = useState(new Date(1598051730000));
	const [time, settime] = useState(new Time(1200))
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [modelVisable, setmodelVisable] = useState(false);
	const [pickUp, setpickUp] = useState([""]);
	const [destination, setdestination] = useState([""]);
	const [modalVisible, setmodalVisible] = useState(false);
	const [modalVisible2, setmodalVisible2] = useState(false);
	const [ID, setID] = useState(null)
	const [phoneNumber, setphoneNumber] = useState("")
	const [Fullname, setFullname] = useState("")
	const [profilepic, setprofilepic] = useState("")
	const [carName, setcarName] = useState("")
	const [carplate, setcarplate] = useState("")
	const [DriverNum, setDriverNum] = useState("")
	
	
	const handleChangePickup = (pickUp) => {
		setpickUp(pickUp);
	};
	const handleChangeDestination = (destination) => {
		setdestination(destination);
	};

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};
	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};
	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleConfirmDate = (date) => {
		const d= new Date(date)
		const dates =d.getDate()
		const month=d.getMonth()  
		const year=d.getFullYear()
		const NewDate=dates + "/"+month +"/"+year
		console.log("A date has been picked: ", NewDate);
		setDate(NewDate)
		hideDatePicker();
		
	};
	const handleConfirmTime = (time) => {
		const t =new Date(time)
		const hour= t.getHours()
		const minutes=t.getMinutes()
		const NewTime=hour +":"+ minutes
	
		settime(NewTime);
		
		console.log("A date has been picked: ", result);
		
		hideTimePicker();
	};
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	const oneTimeLogin = async () => {
		
	};
useEffect(async() => {
	let result = await SecureStore.getItemAsync("PhoneNum");
	setphoneNumber(result);
	
	
  const db =getDatabase()
  onValue(ref(db, `Drivers/${result}/BasicInfo`), (querySnapShot) => {
		let data = querySnapShot.val() || {};
		console.log(data)
		setFullname(data.Fullname)
		setprofilepic(data.Profilepic)
		
	});
	onValue(ref(db, `Drivers/${result}/VechileInfo`),(querySnapShot)=>{
		let data2=querySnapShot.val()||{};
		console.log(data2)
		setcarName(data2.Vechilename)
		setcarplate(data2.Plate)
	});
   

  
}, [])

	const Submit = async() => {
		
		console.log(phoneNumber)
	
		  const postData = {
			Pickup:pickUp,
			Destination:destination,
			Date:date,
			Time:time,
			DriverNumber:phoneNumber,
			Fullname:Fullname,
			Profilepic:profilepic,
			

			};
		const db = getDatabase();
		   push(ref(db, "/DriverPosts"), {
					Pickup: pickUp,
					Destination: destination,
					Date: date,
					Time: time,
					Fullname: Fullname,
					Profilepic: profilepic,
					carName: carName,
					carplate: carplate,
					DriverNumber: phoneNumber,
				});
		// const newPostKey= push(child(ref(db), 'posts')).key;
		//   const updates = {};
			
		// 	updates["/Driverposts/" + `UID/${newPostKey}`] = postData;

		// 	return update(ref(db), updates);
	};

	return (
		<>
			<View style={styles.container}>
				{/* <View style={styles.flexCenter}>
						<View style={styles.horizontalClip} />
					</View> */}

				<KeyboardAvoidingView style={{ paddingLeft: 10, paddingRight: 10 }}>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							marginTop: 20,
							color: "#fff",
						}}
					>
						Enter Pickup Location
					</Text>
					<TextInput
						onTouchStart={() => {
							setmodalVisible(true);
						}}
						value={pickUp}
						placeholder="Pick-up Location"
						style={styles.input}
						onChangeText={handleChangePickup}
					/>
					<Text
						style={{
							fontSize: 18,
							fontWeight: "bold",
							marginTop: 10,
							color: "#fff",
						}}
					>
						Enter Destination
					</Text>
					<TextInput
						onTouchStart={() => {
							setmodalVisible2(true);
						}}
						value={destination}
						placeholder="Drop Off Location"
						style={styles.input}
						onChangeText={handleChangeDestination}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-around",
						}}
					>
						<TouchableHighlight onPress={showDatePicker}>
							<View style={styles.Datebutton}>
								<Text style={{ color: "#2153CC", fontWeight: "bold" }}>
									{" "}
									Set Date
								</Text>
								<DateTimePickerModal
									isVisible={isDatePickerVisible}
									mode="date"
									onConfirm={handleConfirmDate}
									onCancel={hideDatePicker}
									style={{ width: 30 }}
								/>
							</View>
						</TouchableHighlight>
						<TouchableHighlight onPress={showTimePicker}>
							<View style={styles.Datebutton}>
								<Text style={{ color: "#2153CC", fontWeight: "bold" }}>
									{" "}
									Set Time
								</Text>
								<DateTimePickerModal
									isVisible={isTimePickerVisible}
									mode="time"
									onConfirm={handleConfirmTime}
									onCancel={hideTimePicker}
									style={{ width: 30 }}
								/>
							</View>
						</TouchableHighlight>
					</View>
					<TouchableHighlight
						onPress={() => {
							// navigation.replace("Dashboard");
							try {
								Submit();
								//  navigation.replace("Dashboard");
								setmodelVisable(true);
							} catch (error) {
								console.log(error);
							}
						}}
					>
						<View style={styles.button}>
							<Text style={{ color: "#2153CC", fontWeight: "bold" }}>Done</Text>
						</View>
					</TouchableHighlight>
				</KeyboardAvoidingView>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modelVisable}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={{ color: "white" }}>Request Sent</Text>
							<Text style={{ color: "white" }}>Your request has send</Text>
							<TouchableHighlight
								onPress={() => {
									setmodelVisable(false);
									navigation.navigate("DriverDashboard");
								}}
							>
								<Text style={styles.button2}>Close</Text>
							</TouchableHighlight>
						</View>
					</View>
				</Modal>
				<Modal
					animationType="slide"
					visible={modalVisible}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView2}>
						<TouchableHighlight
							onPress={() => {
								setmodalVisible(false);
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 18,
									marginLeft: 5,
									marginTop: 5,
								}}
							>
								Close
							</Text>
						</TouchableHighlight>

						<GooglePlacesAutocomplete
							styles={{
								container: {
									marginTop: 10,
								},
							}}
							placeholder="Search"
							onPress={(data, details = null) => {
								// 'details' is provided when fetchDetails = true
								console.log(data.description);
								setpickUp(data.description);
							}}
							query={{
								key: "AIzaSyDpYM_2b7YZqKmsDv__NEYzkiwJHyWIVMw",
								language: "en",
							}}
						/>
					</View>
				</Modal>
				<Modal
					animationType="slide"
					visible={modalVisible2}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView2}>
						<TouchableHighlight
							onPress={() => {
								setmodalVisible2(false);
							}}
						>
							<Text
								style={{
									color: "white",
									fontSize: 18,
									marginLeft: 5,
									marginTop: 5,
								}}
							>
								Close
							</Text>
						</TouchableHighlight>

						<GooglePlacesAutocomplete
							styles={{
								container: {
									marginTop: 10,
								},
							}}
							placeholder="Search"
							onPress={(data, details = null) => {
								// 'details' is provided when fetchDetails = true
								console.log(data.description);
								setdestination(data.description);
							}}
							query={{
								key: "AIzaSyDpYM_2b7YZqKmsDv__NEYzkiwJHyWIVMw",
								language: "en",
							}}
						/>
					</View>
				</Modal>
			</View>
		</>
	);
};

export default HomeSearchDrivers;
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 20,
		backgroundColor: "#2153CC",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	input: {
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,

		backgroundColor: "white",
		height: 60,
		borderTopRightRadius: 20,
		shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 3,
		// },
	},
	centeredView2: {
		flex: 1,
		backgroundColor: "#043F96",
	},

	button2: {
		width: 150,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "white",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
		textAlign: "center",
		color: "black",
		fontSize: 18,
		fontWeight: "500",
		marginTop: 15,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		color: "white",
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

		marginTop: 20,
		marginLeft: 10,
	},
	Datebutton: {
		alignItems: "center",
		backgroundColor: "#fff",
		color: "white",
		padding: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: android.width * 0.34,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,

		marginTop: 20,
	},
	flexCenter: {
		alignItems: "center",
	},
	horizontalClip: {
		backgroundColor: Colors.mediumGrey,
		width: 60,
		height: 5,
		borderRadius: 25,
		marginBottom: 8,
	},
	inputBox: {
		backgroundColor: Colors.lightGrey,
		margin: 10,
		paddingVertical: 10,
		paddingHorizontal: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		// borderRadius: 8
	},
	inputText: {
		borderRadius: 38,
		backgroundColor: "#e0e0e0",

		width: android.width * 0.94,
		height: 60,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},

		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
	},
	timeContainer: {
		flexDirection: "row",
		width: 100,
		justifyContent: "space-between",
		backgroundColor: Colors.background,
		padding: 8,
		alignItems: "center",
		borderRadius: 50,
	},
	row: {
		marginTop: 5,
		flexDirection: "row",
		alignItems: "center",
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: Colors.mediumGrey,
	},
	iconContainer: {
		backgroundColor: "#b3b3b3",
		padding: 10,
		borderRadius: 25,
	},
	destinationText: {
		marginLeft: 15,
		fontWeight: "600",
		fontSize: 16,
		color: Colors.darkGrey,
	},
	displayRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	lastRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	pointsText: {
		marginLeft: 8,
		fontWeight: "600",
		fontSize: 14,
		color: Colors.darkGrey,
	},
	rewardsText: {
		fontWeight: "400",
		marginRight: 15,
		fontSize: 14,
		color: Colors.darkGrey,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "#043F96",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
