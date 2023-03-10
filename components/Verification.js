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

try {
	firebase.initializeApp({
		apiKey: "AIzaSyApXe3W_5MsAs4kbP6PLVDNQSzoMSEiS1k",
		authDomain: "rideshare-e63db.firebaseapp.com",
		projectId: "rideshare-e63db",
		storageBucket: "rideshare-e63db.appspot.com",
		messagingSenderId: "593723067966",
		appId: "1:593723067966:web:8e82734b96f6265c544b6f",
		measurementId: "G-L1KLQTD7C1",
	});
} catch (err) {
	// ignore app already initialized error in snack
}
//  navigationOptions = ({ navigation }) => SetNavOptions('Topics', navigation)


const Verification = (props) => {
	const { navigation, route } = props;

	const [verificationCode, setVerificationCode] = React.useState();

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
	let verificationId;
	return (
		<>
			<View style={styles.container}>
				<ImageBackground source={bg} resizeMode="cover">
					<View style={styles.container}>
						<View
							style={{
								flexDirection: "column",
								alignItems: "center",
								marginTop: 120,
							}}
						>
							<Text
								style={{
									marginTop: 10,
									marginStart: 10,
									color: "#fff",
									fontSize: 36,
									fontWeight: "bold",
								}}
							>
								Enter OTP code
							</Text>
							<TextInput
								label=" Enter OTP"
								style={styles.input}
								// editable={!!verificationId}
								placeholder="123456"
								onChangeText={setVerificationCode}
								keyboardType="phone-pad"
							/>
							<TouchableHighlight
								onPress={async () => {
									try {
										// setVerificationId=props.id
										const credential =
											firebase.auth.PhoneAuthProvider.credential(
												(verificationId = route.params.verificationId),
												verificationCode
											);
										await firebase.auth().signInWithCredential(credential);
										console.log(verificationId);

										navigation.replace("UserRegistration");
									} catch (err) {
										showMessage({
											text: `Error: ${err.message}`,
											color: "red",
										});
										console.log(verificationId);
									}
								}}
							>
								<View style={styles.button}>
									<Text style={{ color: "white", fontWeight: "bold" }}>
										{" "}
										verify OTP
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
				</ImageBackground>
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
		backgroundColor: "#fcc200",
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

		marginTop: 50,
	},
	input: {
		marginTop: 80,
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
	textInput: {
		paddingVertical: 0,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
	},
});

export default Verification;
