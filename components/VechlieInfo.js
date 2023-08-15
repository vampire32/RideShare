import React,{useState} from 'react'
import { Image, TouchableHighlight, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import Logo from "../assets/person-icon-5.png"
import Icon from '../assets/free-car-icon-1057-thumb.png'
import Icon2 from '../assets/cer.png'
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

const VechlieInfo = (props) => {
    const { navigation, route } = props;
	const [Name, setName] = useState("");
	const [Plate, setPlate] = useState("");
	const [image, setImage] = useState(
		"https://www.pngitem.com/pimgs/m/285-2855837_your-car-you-transparent-car-vector-png-png.png"
	);
	const [image2, setImage2] = useState(
		"https://cdn-icons-png.flaticon.com/512/3000/3000745.png"
	);
	const [image3, setImage3] = useState(
		"https://cdn-icons-png.flaticon.com/512/3000/3000745.png"
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
			setImage2(result.assets[1].uri);
			setImage3(result.assets[2].uri);

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
	const pickImage3 = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			
			setImage3(result.assets[0].uri);
			console.log(image)
		}
	};
	const handleChangeName = (name) => {
		setName(name);
	};
	const handleChangeEmail = (Plate) => {
		setPlate(Plate);
	};
	const Submit = async() => {
		let result = await SecureStore.getItemAsync("PhoneNum");
		setphoneNumber(result);
		const db = getDatabase();
		set(ref(db, "Drivers/" + `${result}/` + "VechileInfo/"), {
			Vechilename: Name,
			Plate: Plate,
			picofViechile: image,
			certfiFront: image2,
			certfiback: image3,
		});
	};
  return (
		<View
			style={{
				backgroundColor: "#fff",
				width: android.width,
				height: android.height,
				color: "#2153CC",
			}}
		>
			<Text
				style={{
					marginTop: 70,
					marginBottom: 30,
					textAlign: "center",
					fontSize: 28,
					fontWeight: "bold",
					color: "#2153CC",
				}}
			>
				Vechlie Information
			</Text>

			<Text
				style={{
					marginLeft: 5,
					marginBottom: 5,
					fontSize: 12,
					fontWeight: "bold",
					color: "#2153CC",
				}}
			>
				Vechlie Name and Color
			</Text>
			<TextInput
				style={styles.input}
				label="Vechlie Name and Color"
				placeholder="Vechlie Name and Color"
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
					color: "#2153CC",
				}}
			>
				Number Plate
			</Text>
			<TextInput
				style={styles.input}
				label="Enter your Number Plate"
				placeholder="Enter your Number Plate"
				onChangeText={handleChangeEmail}
				value={Plate}
			/>
			<View>
				<Text
					style={{
						marginLeft: 5,
						marginBottom: 5,
						fontSize: 12,
						fontWeight: "bold",
						marginTop: 10,
						color: "#2153CC",
					}}
				>
					Photo Of Vechlie
				</Text>
				<Pressable onPress={pickImage}>
					<Image source={{ uri: image }} style={{ width: 300, height: 100 }} />
				</Pressable>
			</View>

			<Text
				style={{
					marginLeft: 5,
					marginBottom: 5,
					fontSize: 12,
					fontWeight: "bold",
					marginTop: 10,
					color: "#2153CC",
				}}
			>
				Ceritficate of your Vechlie
			</Text>

			<View style={{ flexDirection: "row" }}>
				<Pressable onPress={pickImage2}>
					<Image source={{ uri: image2 }} style={{ width: 100, height: 100 }} />
				</Pressable>
				<Pressable onPress={pickImage3}>
					<Image source={{ uri: image3 }} style={{ width: 100, height: 100 }} />
				</Pressable>
			</View>

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
export default VechlieInfo;