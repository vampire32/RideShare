import React, {useState} from 'react'
import { FlatList, Image, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import Logo from '../assets/der.jpg'
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


const IdConfrim = (props) => {
   const { navigation, route } = props;
   const [image, setImage] = useState(
			"https://media.istockphoto.com/id/477437773/photo/young-man-showing-his-driver-license.jpg?s=612x612&w=0&k=20&c=MvszGLPHuLtrRWo5SkjgZA9DDBGo_2qRoenjcQ4mVEY="
		);
   	const [phoneNumber, setphoneNumber] = useState("");
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
			const db = getDatabase();
			set(ref(db, "Drivers/" + `${result}/` + "idconfirm/"), {
				picofViechile: image,
			});
		};
  return (
		<View style={styles.container}>
			<Text
				style={{
					marginTop: 70,
					textAlign: "center",
					fontSize: 28,
					fontWeight: "bold",
					color: "#2153CC",
				}}
			>
				ID Confirmation
			</Text>
			<View
				style={{
					flexDirection: "column",

					alignItems: "center",
					marginTop: 40,
				}}
			>
				<Image
					source={{ uri: image }}
					style={{ width: 150, height: 150, borderRadius: 20 }}
				/>
				<Pressable onPress={pickImage}>
					<Text
						style={{
							marginTop: 10,
							marginBottom: 20,
							fontSize: 16,
							borderColor: "#2153CC",
							borderRadius: 40,
							borderWidth: 1,
							paddingBottom: 10,
							paddingLeft: 20,
							paddingRight: 20,
							paddingTop: 10,
							color: "#2153CC",
						}}
					>
						Add Photo
					</Text>
				</Pressable>
			</View>

			<Text
				style={{
					textAlign: "justify",
					fontSize: 16,
					lineHeight: 30,
					color: "#2153CC",
				}}
			>
				Bring the drivers license in front of you and take a photo as an example
				{"\n"}
				The Photo should clearly show the face and your driver license The Photo
				must be taken in good light and good quality{"\n"} Photos in sunglasses
				are not allowed
			</Text>

			<Pressable
				onPress={() => {
					Submit()
					props.navigation.replace("DriverReg");
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
		height: android.height ,
    backgroundColor:"#fff"
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

		width: android.width ,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,

		marginTop: 50,
    textAlign:'center',
    fontSize:18
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
export default IdConfrim