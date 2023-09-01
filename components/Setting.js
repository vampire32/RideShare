import React, { Component,useState,useEffect } from "react";
import { StyleSheet, View, Image, Text,TouchableHighlight,ImageBackground,Dimensions,Modal } from "react-native";
import bg from "../assets/images/bg2.png";

import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

import Reviews from "./Reviews";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase/compat/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import user from "../assets/images/avatar2.jpeg";
import * as ImagePicker from "expo-image-picker";
import { Pressable } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Picker } from "@react-native-picker/picker";
import { BlurView } from "expo-blur";

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
function Profile(props) {
	const [UserName, setUserName] = useState("")
	const [UserEmail, setUserEmail] = useState("")
	const [UserPhone, setUserPhone] = useState("")
	const [UserGender, setUserGender] = useState("")
	const [UserProfile, setUserProfile] = useState("")
	const [ModalVisible, setModalVisible] = useState(false);
	const [value, setValue] = useState("gender");
	const [items, setItems] = useState([
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	]);
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Gender, setGender] = useState("");
	const [Phone, setPhone] = useState("");
	const [image, setImage] = useState(
		"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
	);
		const { navigation, route } = props;
	useEffect(() => {
		const FecthData=async()=>{
			let result = await SecureStore.getItemAsync("PhoneNum");
			console.log(result)
			const db = getDatabase();
			onValue(ref(db, `users/${result}`), (querySnapShot) => {
				let data = querySnapShot.val() || {};
				setUserName(data.Fullname)
				setUserEmail(data.Email)
				setUserPhone(data.Phone)
				setUserGender(data.Gender)
				setUserProfile(data.Profilepic)
			});

		}
		FecthData()
	  
	}, [])
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};
	const handleChangeName = (name) => {
		setName(name);
	};
	const handleChangeEmail = (email) => {
		setEmail(email);
	};
	const handleChangeGender = (gender) => {
		setGender(gender);
	};
	const handleChangePhone = (phone) => {
		setPhone(phone);
	};
		const Submit = () => {
			const db = getDatabase();
			set(ref(db, "users/" + Phone), {
				Fullname: Name,
				Email: Email,
				Gender: Gender,
				Phone: Phone,
				Profilepic: image,
			});
		};
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: UserProfile }}
				resizeMode="contain"
				style={styles.image}
			></Image>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					backgroundColor: "#2153CC",
					borderRadius: 50,
					padding: 3,
					marginTop: 10,
				}}
			>
				<Icon name="person" size={40} color="#fff" />
				<Text
					style={{
						fontSize: 18,
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					{UserName}
				</Text>
				<Text style={{ padding: 1 }}></Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					backgroundColor: "#2153CC",
					borderRadius: 50,

					marginTop: 10,
					padding: 3,
				}}
			>
				<Icon name="email" size={40} color="#fff" />
				<Text
					style={{
						fontSize: 18,
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					{UserEmail}
				</Text>
				<Text style={{ padding: 1 }}></Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					backgroundColor: "#2153CC",
					borderRadius: 50,

					marginTop: 10,
					padding: 3,
				}}
			>
				<Icon name="phone" size={40} color="#fff" />
				<Text
					style={{
						fontSize: 18,
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					{UserPhone}
				</Text>
				<Text style={{ padding: 2 }}></Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					backgroundColor: "#2153CC",
					borderRadius: 50,

					marginTop: 10,
					padding: 3,
				}}
			>
				<Icon2 name="venus-mars" size={40} color="#fff" />
				<Text
					style={{
						fontSize: 18,
						color: "#fff",
						fontWeight: "bold",
					}}
				>
					{UserGender}
				</Text>
				<Text style={{ padding: 2 }}></Text>
			</View>

			<TouchableHighlight
				onPress={() => {
					setModalVisible(true);
				}}
			>
				<View style={styles.button}>
					<Text style={{ color: "white", fontWeight: "bold" }}>Update</Text>
				</View>
			</TouchableHighlight>
			<Modal
				animationType="slide"
				visible={ModalVisible}
				onRequestClose={() => {
					alert("Modal has been closed.");
				}}
			>
				<View style={styles.centeredView}>
					<Pressable onPress={()=>{
						setModalVisible(false)
					}}>
						<Text>close</Text>
					</Pressable>

					<Text
						style={{
							textAlign: "center",
							fontSize: 24,
							fontWeight: "bold",
							color: "#ffff",
						}}
					>
						Profile Update
					</Text>
					<ScrollView>
						<BlurView
							intensity={75}
							style={{
								paddingBottom: 300,
								borderTopStartRadius: 15,
								borderTopEndRadius: 15,
								paddingLeft: 10,
								paddingRight: 10,
								marginTop: 20,
							}}
						>
							<Pressable onPress={pickImage}>
								<Image
									source={{ uri: image }}
									style={{
										width: 80,
										height: 80,
										borderRadius: 90,
										marginLeft: "35%",
										marginTop: 10,
									}}
								/>
							</Pressable>

							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "#fff",
									marginStart: 10,
									paddingBottom: 10,
									marginTop: 10,
								}}
							>
								Full Name
							</Text>
							<TextInput
								value={Name}
								label="Enter Your Name"
								style={styles.input}
								placeholder="Ahmed Ali"
								onChangeText={handleChangeName}
							/>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "#ffff",
									marginStart: 10,
									paddingBottom: 10,
									marginTop: 10,
								}}
							>
								Email
							</Text>
							<TextInput
								value={Email}
								label="info@mail.com"
								style={styles.input}
								placeholder="Ahmed Ali"
								onChangeText={handleChangeEmail}
							/>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "#ffff",
									marginStart: 10,
									paddingBottom: 10,
									marginTop: 10,
								}}
							>
								Phone Number
							</Text>
							<TextInput
								value={Phone}
								label="Phone Number"
								style={styles.input}
								placeholder="Ahmed Ali"
								onChangeText={handleChangePhone}
							/>
							<Text
								style={{
									fontSize: 18,
									fontWeight: "bold",
									color: "#fff",
									marginStart: 10,
									paddingBottom: 10,
									marginTop: 10,
								}}
							>
								Gender
							</Text>
							<Picker
								style={styles.input2}
								selectedValue={Gender}
								onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
							>
								<Picker.Item label="Pick the Gender" value="male" />
								<Picker.Item label="Male" value="male" />
								<Picker.Item label="Female" value="female" />
							</Picker>

							<TouchableHighlight
								onPress={() => {
									// navigation.replace("Dashboard");
									try {
										Submit();
										setModalVisible(false);
										//  navigation.replace("Dashboard");
									} catch (error) {
										console.log(error);
									}
								}}
							>
								<View style={styles.button}>
									<Text style={{ color: "#fff", fontWeight: "bold" }}>
										submit
									</Text>
								</View>
							</TouchableHighlight>
						</BlurView>
					</ScrollView>
					{/* <View style={styles.modalView}>
							<Text style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>
								Profile Update
							</Text>

							<TouchableHighlight
								onPress={() => {
									setModalVisible(false);
								}}
							>
								<Text style={styles.button2}>Close</Text>
							</TouchableHighlight>
						</View> */}
				</View>
			</Modal>
		</View>
	);
}

const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height,
		backgroundColor: "white",
	},
	Text: {
		color: "#ffff",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#2153CC",
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

		marginTop: 60,
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
	image: {
		width: 121,
		height: 133,
		marginTop: 50,
		marginLeft: 127,
		borderRadius: 100,
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

		marginTop: 22,
		backgroundColor: "#2153CC",
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

export default Profile;
