import React,{useState} from 'react'
import { Text, View,Dimensions,StyleSheet ,TextInput,Image, Pressable} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../assets/card2.jpg'
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

const CNIC = (props) => {
	const { navigation, route } = props;
	const [CnicNumber, setCnic] = useState("");
	const [image, setImage] = useState(
		"https://www.incpak.com/wp-content/uploads/2017/04/NADRA.jpg"
	);
	const [image2, setImage2] = useState(
		"https://online.theunitedinsurance.com/Admin_files/Images/cnic-back-side.jpg"
	);
	const [phoneNumber, setphoneNumber] = useState("");
	const handleChangeName = (CnicNumbers) => {
		setCnic(CnicNumbers);
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
	const pickImage2 = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage2(result.assets[0].uri);
		}
	};
	const Submit = async () => {
			let result = await SecureStore.getItemAsync("PhoneNum");
		const db = getDatabase();

		set(ref(db, "Drivers/" + `${result}/` + "CINCinfo/"), {
			DriverCnic: CnicNumber,
			frottimg: image,
			backimg: image2,
		});
	};
  return (
		<View style={styles.container}>
			<ScrollView>
				<View
					style={{
						marginTop: 50,
						backgroundColor: "#FFF",
						paddingVertical: 40,
						borderRadius: 30,
						elevation: 10,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 22,
							fontWeight: "bold",
						}}
					>
						CNIC Number
					</Text>
					<TextInput
						style={{
							width: "50%",
							marginLeft: "25%",
							borderRadius: 10,
							textAlign: "center",
							backgroundColor: "#FFFDD0",
							marginTop: 10,
							paddingVertical: 10,
							elevation: 5,
						}}
						keyboardType="name-phone-pad"
						label="Lincese Number"
						placeholder="Lincese Number"
						onChangeText={handleChangeName}
						value={CnicNumber}
					/>
				</View>
				<View
					style={{
						marginTop: 50,
						backgroundColor: "#FFF",
						paddingVertical: 10,
						borderRadius: 30,
						elevation: 10,
					}}
				>
					<Image
						source={{ uri: image }}
						style={{ width: 300, height: 200, marginTop: 30, marginLeft: 30 }}
					/>
					<Text
						style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
					>
						Front Side
					</Text>
					<Pressable onPress={pickImage}>
						<Text
							style={{
								borderColor: "#2153CC",
								borderRadius: 40,
								borderWidth: 1,
								width: "30%",
								textAlign: "center",
								paddingVertical: 10,
								marginLeft: "35%",
								marginTop: 10,
							}}
						>
							Add Photo
						</Text>
					</Pressable>
				</View>
				<View
					style={{
						marginTop: 50,
						backgroundColor: "#FFF",
						paddingVertical: 10,
						borderRadius: 30,
						elevation: 10,
					}}
				>
					<Image
						source={{ uri: image2 }}
						style={{ width: 300, height: 200, marginTop: 30, marginLeft: 30 }}
					/>
					<Text
						style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
					>
						Back Side
					</Text>
					<Pressable onPress={pickImage2}>
						<Text
							style={{
								borderColor: "#2153CC",
								borderRadius: 40,
								borderWidth: 1,
								width: "30%",
								textAlign: "center",
								paddingVertical: 10,
								marginLeft: "35%",
								marginTop: 10,
								marginBottom: 30,
							}}
						>
							Add Photo
						</Text>
					</Pressable>
				</View>
				<Pressable onPress={async()=>{
					try {
						let result = await SecureStore.getItemAsync("PhoneNum");
						setphoneNumber(result);
						Submit();
						navigation.navigate("DriverReg");
					} catch (error) {
						console.log(error)
						
					}
					
					
				}}>
					<Text style={styles.button}>Next</Text>
				</Pressable>
			</ScrollView>
		</View>
	);
}
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height,
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

		width: android.width,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,

		marginTop: 50,
		textAlign: "center",
		fontSize: 18,
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
export default CNIC