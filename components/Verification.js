import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableWithoutFeedback,
	StatusBar,
	SafeAreaView,
	Keyboard,
	TouchableOpacity,
	KeyboardAvoidingView,
	Dimensions,
	TouchableHighlight,
	ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import bg from "../assets/images/bg2.png";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import OTPBG from "../assets/otpbg.png"

try {
	firebase.initializeApp({
		apiKey: "AIzaSyC-tsScYuvKuNwGFpFEBQhBft-FZBhzRww",
		authDomain: "carsharing2-d254d.firebaseapp.com",
		projectId: "carsharing2-d254d",
		storageBucket: "carsharing2-d254d.appspot.com",
		messagingSenderId: "450530782923",
		appId: "1:450530782923:web:43786c1b9a42666e40b54e",
		measurementId: "G-VVEWZZGFBT",
	});
} catch (err) {
	// ignore app already initialized error in snack
}
//  navigationOptions = ({ navigation }) => SetNavOptions('Topics', navigation)


const Verification = (props) => {
	const { navigation, route } = props;

	const [verificationCode, setVerificationCode] = React.useState();
	const [verificationId, setverificationId] = React.useState(route.params.verificationID);

	const firebaseConfig = firebase.apps.length
		? firebase.app().options
		: undefined;
	const [message, showMessage] = React.useState(
		!firebaseConfig || Platform.OS === "web"
			? {
					text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
			  }
			: undefined
	);
	
	return (
		<>
			<View style={styles.container}>
				<View style={styles.container}>
					<View
						style={{
							flexDirection: "column",
							alignItems: "center",
							marginTop: 50,
						}}
					>
						<Text
							style={{
								marginStart: 10,
								color: "#fff",
								fontSize: 36,
								fontWeight: "bold",
								backgroundColor: "#2153CC",
								padding: 15,
								borderRadius: 15,
							}}
						>
							Enter OTP code
						</Text>
						<Image
							source={OTPBG}
							style={{ width: 250, height: 250, marginTop: 10 }}
						></Image>
						<Text style={{ color: "#2153CC",fontWeight:"bold",fontSize:12 }}>
							We have sent a verification code to your mobile
						</Text>
						<TextInput
							label=" Enter OTP"
							style={styles.input}
							// editable={!!verificationId}
							placeholder="123456"
							onChangeText={setVerificationCode}
							keyboardType="phone-pad"
							textColor="#ffff"
							selectionColor="#ffff"
						/>
						<TouchableHighlight
							onPress={async () => {
								try {
									// setVerificationId=props.id
									const credential = firebase.auth.PhoneAuthProvider.credential(
										verificationId,
										verificationCode
									);
									await firebase.auth().signInWithCredential(credential);
									console.log(verificationId);

									navigation.navigate("UserRegistration", {
										Phone: route.params.Phone,
									});
								} catch (err) {
									alert("PLease Enter Correct Number again")
									console.log(verificationId);
									navigation.navigate("Login")
								}
							}}
						>
							<View style={styles.button}>
								<Text style={{ color: "#fff", fontWeight: "bold" }}>
									{" "}
									Submit
								</Text>
							</View>
						</TouchableHighlight>
					</View>
					{message ? (
						<TouchableOpacity
							style={[
								StyleSheet.absoluteFill,
								{ backgroundColor: 0xffffffee, justifyContent: "center" },
							]}
							onPress={() => showMessage(undefined)}
						>
							<Text
								style={{
									color: message.color || "blue",
									fontSize: 17,
									textAlign: "center",
									margin: 20,
								}}
							>
								{message.text}
							</Text>
						</TouchableOpacity>
					) : undefined}
				</View>
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

		alignItems: "center",
	},

	topText: {
		flexDirection: "row",
		// alignItems:'center'
		// justifyContent: "space-around",
		marginTop: 30,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#2153CC",
		
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

		marginTop: 50,
	},
	input: {
		marginTop: 50,
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
		color: "#fff",

		elevation: 7,
	},
	textInput: {
		paddingVertical: 0,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
	},
});

export default Verification;
