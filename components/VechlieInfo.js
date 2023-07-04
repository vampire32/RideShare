import React from 'react'
import { Image, TouchableHighlight, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import Logo from "../assets/person-icon-5.png"
import Icon from '../assets/free-car-icon-1057-thumb.png'
import Icon2 from '../assets/cer.png'
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

const VechlieInfo = (props) => {
    const { navigation, route } = props;
	const [Name, setName] = useState("");
	const [Plate, setPlate] = useState("");
	const handleChangeName = (name) => {
		setName(name);
	};
	const handleChangeEmail = (Plate) => {
		setEmail(Plate);
	};
	const Submit = () => {
		const db = getDatabase();
		set(ref(db, "Drivers/" + "VechileInfo/" + Name), {
			Vechilename: Name,
			Plate: Email,
			
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
			<Pressable>
				<Image source={Icon} style={{ width: 100, height: 100 }} />
			</Pressable>
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
				<Pressable>
					<Image source={Icon2} style={{ width: 100, height: 100 }} />
				</Pressable>
				<Pressable>
					<Image source={Icon2} style={{ width: 100, height: 100 }} />
				</Pressable>
			</View>

			<Pressable
				onPress={() => {
					navigation.replace("DriverReg");
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