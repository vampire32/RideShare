import React,{useState,useEffect} from "react";
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
	Modal
	
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { TextInput } from "react-native-paper";
import bg from "../assets/images/bg2.png";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import Colors from "../assets/constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import firebase from "firebase/compat/app";
import {
	getDatabase,
	ref,
	set,
	push,
	child,
	update,
	onValue,
} from "firebase/database";
import * as SecureStore from "expo-secure-store";
import MapVieww from "./CurrentLocation";
import * as LocationGeocoding from "expo-location";
import * as Location from "expo-location";
// import * as Location from "expo-location";
// navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');


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



const HomeSearch = (props) => {
	const [UserInput, setUserInput] = useState("")
	

	
	const [UserName, setUserName] = useState("")
	const [UserPic, setUserPic] = useState("")
	const [UserPhoneNum, setUserPhoneNum] = useState("")
	const [UserSeat, setUserSeat] = useState("")
	const [isLoading, setisLoading] = useState(true)
	  const [Latitude, setLatitude] = useState("");
		const [longtitude, setlongtitude] = useState("");
		const [Latitude2, setLatitude2] = useState("");
		const [longtitude2, setlongtitude2] = useState("");
		const [UserLatitude, setUserLatitude] = useState("");
		const [Userlongtitude, setUserlongtitude] = useState("");
		const [UserLatitude2, setUserLatitude2] = useState("");
		const [Userlongtitude2, setUserlongtitude2] = useState("");
		const [AddressText, setAddressText] = useState("");
		const [RidePrice, setRidePrice] = useState("")
		const [location, setlocation] = useState(null)
		
		
		const deg2rad = (angle) => {
			return angle * (Math.PI / 180);
		};
		const calculateDistance = () => {
			const R = 6371; // Earth's radius in kilometers

			const dLat = deg2rad(Latitude2 - Latitude);
			const dLon = deg2rad(longtitude2 - longtitude);

			const a =
				Math.sin(dLat / 2) * Math.sin(dLat / 2) +
				Math.cos(deg2rad(Latitude)) *
					Math.cos(deg2rad(Latitude2)) *
					Math.sin(dLon / 2) *
					Math.sin(dLon / 2);

			const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

			const distance = R * c;
			console.log(distance)
			const PetPricePerKM=5;
			const MaintainceCOst=5;
			const DriverProfit=5;
			const KMPrice=Math.round( distance*(PetPricePerKM+MaintainceCOst+DriverProfit))
			console.log(KMPrice)
			setRidePrice(KMPrice)
			return KMPrice;
		};
		const settingCordinates=()=>{
			let userlat1=parseFloat(Latitude)
			let userlong=parseFloat(longtitude)
			let userlat2=parseFloat(Latitude2)
			let userlong2=parseFloat(longtitude2)
			setUserLatitude(userlat1)
			setUserlongtitude(userlong)
			setUserLatitude2(userlat2)
			setUserlongtitude2(userlong2)
		}
		
	useEffect(() => {
		const fetch=async()=>{
			const subscription = Location.watchPositionAsync(
				{
					accuracy: Location.Accuracy.High,
					timeInterval: 1000, // Update every 1 second
				},
				async (newLocation) => {
					const addressResponse = await LocationGeocoding.reverseGeocodeAsync(
						newLocation.coords
					);

					setlocation(newLocation)
					
					setAddressText(props.Address)
					setLatitude(newLocation.coords.latitude)
					setlongtitude(newLocation.coords.longitude)
				}
			);
			subscription
			
		let result = await SecureStore.getItemAsync("PhoneNum");

		const db = getDatabase();
		onValue(ref(db, `users/${result}`), (querySnapShot) => {
			let data = querySnapShot.val() || {};
			setUserName(data.Fullname);
			setUserPic(data.Profilepic);
		});
		onValue(ref(db, `Seats/${result}`), (querySnapShot) => {
			let data2 = querySnapShot.val() || {};
			setUserPhoneNum(data2.Phone);
			setUserSeat(data2.SeatNumber);
		});

		}
		fetch()

		
		
	}, []);
	
	const navigation = useNavigation();
	 const [date, setDate] = useState(new Date(1598051730000));
	  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
	  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
	  const [modalVisible, setmodalVisible] = useState(false)
	  const [modalVisible2, setmodalVisible2] = useState(false);
	  
	  const [Destination, setDestination] = useState("")
	  const [modelVisable3, setmodelVisable3] = useState(false)
	
	  

	  const onVhangeAdress=(AddressText)=>{
		setAddressText(AddressText)
	  }
		  

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
				

				
const Submit = async () => {
	let result = await SecureStore.getItemAsync("PhoneNum");
if (AddressText==""&&Destination=="") {
	alert("Please provide the pick and drop deatils")
	
} else {
	const db = getDatabase();
	push(ref(db, `/UserPosts/`+`${result}`), {
		Fullname: UserName,
		Pickup: AddressText,
		dropoff: Destination,
		RidePrice: RidePrice,
		userPic: UserPic,
		userPhone: result,

		Latitude: UserLatitude,
		longtitude: Userlongtitude,
		Latitude2: UserLatitude2,
		longtitude2: Userlongtitude2,
	});
	navigation.navigate("FindingDrivers");
}
	
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
						placeholder={AddressText}
						style={styles.input}
						onTouchStart={() => {
							setmodalVisible(true);
						}}
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
						placeholder={Destination}
						style={styles.input}
						onTouchStart={() => {
							setmodalVisible2(true);
						}}
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
						onPress={async() => {
							if (Destination=="") {
								alert("Please Provide Pickup and Dropoff ")

								
							} else {
								calculateDistance();

								
								settingCordinates();

								setmodelVisable3(true);
								
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
					visible={modalVisible}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView}>
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
							GooglePlacesDetailsQuery={{ fields: "geometry" }}
							fetchDetails={true}
							styles={{
								container: {
									marginTop: 10,
								},
							}}
							placeholder="Search"
							onPress={async (data, details = null) => {
								// 'details' is provided when fetchDetails = true
								console.log(data);
								setAddressText(data.description);
								console.log(JSON.stringify(details.geometry.location));
								let lat3 = JSON.stringify(details.geometry.location.lat);
								let long3 = JSON.stringify(details.geometry.location.lng);
								
								setLatitude(lat3);
								setlongtitude(long3);
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
					<View style={styles.centeredView}>
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
							GooglePlacesDetailsQuery={{ fields: "geometry" }}
							fetchDetails={true}
							styles={{
								container: {
									marginTop: 10,
								},
							}}
							placeholder="Search"
							onPress={async (data, details = null) => {
								// 'details' is provided when fetchDetails = true
								console.log(details);
								setDestination(data.description);
								console.log(JSON.stringify(details.geometry.location));
								let lat2 = JSON.stringify(details.geometry.location.lat);
								let long2 = JSON.stringify(details.geometry.location.lng);
								
								console.log(lat2);
								
								setLatitude2(lat2);
								setlongtitude2(long2);
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
					transparent={true}
					visible={modelVisable3}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView2}>
						<View style={styles.modalView2}>
							<Text style={{ color: "white" }}>Request Sent</Text>
							<Text style={{ color: "white" }}>Your request has send</Text>
							<TouchableHighlight
								onPress={() => {
									setmodelVisable3(false);
									Submit();
									
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

export default HomeSearch;
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	map: {
		height: "40%",
		// marginBottom: -10,
	},
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
	button2: {
		width: 150,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "#fcc200",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
		textAlign: "center",
		color: "#fff",
		fontSize: 18,
		fontWeight: "500",
		marginTop: 15,
	},

	buttonItem: {
		textAlign: "center",
	},
	centeredView: {
		flex: 1,
		backgroundColor: "#043F96",
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
	centeredView2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView2: {
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

