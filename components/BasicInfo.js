import React,{useState} from 'react'
import { Image, TouchableHighlight, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import Logo from "../assets/person-icon-5.png"
import firebase from "firebase/compat/app";
import { getDatabase, ref, set } from "firebase/database";
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

const BasicInfo = (props) => {
    const { navigation, route } = props;
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [DOB, setDOB] = useState("");
	const [image, setImage] = useState(
		"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
	);
	const [phoneNumber, setphoneNumber] = useState("");
	 const handleChangeName = (name) => {
			setName(name);
		};
		const handleChangeEmail = (email) => {
			setEmail(email);
		};
		const handleChangeGender = (DOB) => {
			setDOB(DOB);
		};
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
		const Submit = async() => {
			let result = await SecureStore.getItemAsync("PhoneNum");
		setphoneNumber(result);
		console.log(result)
			const db = getDatabase();
			set(ref(db, "Drivers/"+`${result}/` + "BasicInfo/"), {
				Fullname: Name,
				Email: Email,
				DOB: DOB,
				Profilepic:image,
			});
		};
	
  return (
		<View
			style={{
				backgroundColor: "#fff",
				width: android.width,
				height: android.height,
			}}
		>
			<View
				style={{
					flexDirection: "column",

					alignItems: "center",
					marginTop: 80,
				}}
			>
				<View
					style={{
						backgroundColor: "#043F96",
						borderRadius: 100,
						width: 80,
						height: 80,
					}}
				>
					<Image
						source={{ uri: image }}
						style={{ width: 80, height: 80 }}
					></Image>
				</View>
				<TouchableHighlight onPress={pickImage}>
					<Text
						style={{
							marginTop: 10,
							paddingTop: 10,
							borderColor: "#2153CC",
							borderRadius: 40,
							borderWidth: 1,
							paddingBottom: 10,
							paddingLeft: 20,
							paddingRight: 20,
						}}
					>
						Add Photo
					</Text>
				</TouchableHighlight>
			</View>
			<Text
				style={{
					marginLeft: 5,
					marginBottom: 5,
					fontSize: 12,
					fontWeight: "bold",
				}}
			>
				Full Name
			</Text>
			<TextInput
				style={styles.input}
				label="Enter Tour Name"
				placeholder="Ahmed Ali"
				onChangeText={handleChangeName}
				value={Name}
			/>
			<Text
				style={{
					marginLeft: 5,
					marginBottom: 5,
					fontSize: 12,
					fontWeight: "bold",
					marginTop: 10,
				}}
			>
				Date Of Birth
			</Text>
			<TextInput
				style={styles.input}
				label="Enter your DOB"
				placeholder="Enter your DOB"
				keyboardType='numbers-and-punctuation'
				onChangeText={handleChangeGender}
				value={DOB}
			/>
			<Text
				style={{
					marginLeft: 5,
					marginBottom: 5,
					fontSize: 12,
					fontWeight: "bold",
					marginTop: 10,
				}}
			>
				Email
			</Text>
			<TextInput
				style={styles.input}
				label="Enter your Email"
				placeholder="Enter your Email"
				onChangeText={handleChangeEmail}
				value={Email}
			/>
			<Pressable
				onPress={() => {
					// navigation.replace("Dashboard");
					try {
						Submit();
						//  navigation.replace("Dashboard");
						navigation.navigate("DriverReg");
					} catch (error) {
						console.log(error);
					}
				}}
			>
				<Text style={styles.button}>Next</Text>
			</Pressable>
		</View>
	);
}
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

		width: android.width,
        textAlign:'center',
        fontSize:18,
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
		width: android.width ,
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
export default BasicInfo