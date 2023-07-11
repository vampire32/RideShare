import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import bg from "../assets/images/bg2.png";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import Colors from "../assets/constants/Colors";

import firebase from "firebase/compat/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyDFIAI_UFALrxkghGndMneVBWy0DaZSrgw",
	authDomain: "rideshare2-f8d19.firebaseapp.com",
	projectId: "rideshare2-f8d19",
	storageBucket: "rideshare2-f8d19.appspot.com",
	messagingSenderId: "255084167707",
	appId: "1:255084167707:web:4e2e75f495b93b91a5aebe",
	measurementId: "G-Q18F5FLBH2",
};

const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);
const HomeSearchDrivers = (props) => {
	const navigation = useNavigation();
	const [date, setDate] = useState(new Date(1598051730000));
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	const [modelVisable, setmodelVisable] = useState(false);
	const [pickUp, setpickUp] = useState("");
	const [destination, setdestination] = useState("");
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

	const handleConfirm = (date) => {
		console.log("A date has been picked: ", date);
		hideDatePicker();
		hideTimePicker();
	};
	const Submit = () => {
		const db = getDatabase();
		set(ref(db, "DriverPost/"), {
			Pickup: pickUp,
			Destination: destination,
		});
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
									onConfirm={handleConfirm}
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
									onConfirm={handleConfirm}
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
								}}
							>
								<Text style={styles.button2}>Close</Text>
							</TouchableHighlight>
						</View>
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
