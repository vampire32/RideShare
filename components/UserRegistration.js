import React, { useState ,useEffect} from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	Dimensions,
	TouchableHighlight,
	KeyboardAvoidingView,
	
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import DropDownPicker from "react-native-dropdown-picker";
import Logo from "../assets/logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import bg from "../assets/images/bg2.png";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase/compat/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import user from "../assets/images/avatar2.jpeg";
import * as ImagePicker from "expo-image-picker";
import { Pressable } from "react-native";
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

const app = firebase.initializeApp(firebaseConfig)
const database = getDatabase(app);

const UserRegistration = (props) => {
	
	const { navigation, route } = props;
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("gender");
	const [items, setItems] = useState([
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	]);
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Gender, setGender] = useState("");
	const [Phone, setPhone] = useState(route.params.Phone);
	const [image, setImage] = useState(null);
	useEffect(() => {
		const FecthData = async () => {
			let result = await SecureStore.getItemAsync("PhoneNum");
			const db = getDatabase();
			onValue(ref(db, `users/${result}`), (querySnapShot) => {
				let data = querySnapShot.exists();
				if (data=true) {
					navigation.replace("Dashboard");
					
				} else {
					console.log("Data not Exist")
					
				}
				
			});
		};
		FecthData();

		
	  
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
		  const handleChangeEmail = ( email) => {
				
				setEmail(email);
				
			};
			  const handleChangeGender = (gender) => {
					
					setGender(gender);
				};
				  const handleChangePhone = (phone) => {
						setPhone(phone);
					};
		// console.log(Name);
		// console.log(Email);
		// console.log(Gender)
		const Submit=()=>{
			const db = getDatabase();
			set(ref(db, "users/" +Phone), {
				Fullname: Name,
				Email: Email,
				Gender: Gender,
				Phone:Phone,
				Profilepic:image,
			});
		}
	return (
		<>
			<View
				style={{
					flexDirection: "column",

					alignItems: "center",

					backgroundColor: "#2153CC",
				}}
			>
				<View style={{ marginTop: 20, marginStart: 20 }}>
					<Text style={styles.Text}>Please Enter Correct Details</Text>
				</View>
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
							label="Enter Tour Name"
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
									//  navigation.replace("Dashboard");
									navigation.navigate("Dashboard", {
										screen: "Profile",
										params: { Phone: route.params.Phone },
									});
								} catch (error) {
									console.log(error);
								}
							}}
						>
							<View style={styles.button}>
								<Text style={{ color: "#2153CC", fontWeight: "bold" }}>
									submit
								</Text>
							</View>
						</TouchableHighlight>
					</BlurView>
				</ScrollView>
			</View>
		</>
	);
};
const android = Dimensions.get("window");
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

export default UserRegistration;
