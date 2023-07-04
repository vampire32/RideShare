import React, { useState,useRef } from 'react';
import { StyleSheet, View, Image, ImageBackground, Text,TextInput,Button,Dimensions,TouchableHighlight,Pressable } from "react-native";
import auth from '@react-native-firebase/auth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import bg from "../assets/images/bg.png";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import Logo from "../assets/loginbg.png";
import PhoneInput from "react-native-phone-number-input";
try {
	firebase.initializeApp({
		apiKey: "AIzaSyDFIAI_UFALrxkghGndMneVBWy0DaZSrgw",
		authDomain: "rideshare2-f8d19.firebaseapp.com",
		projectId: "rideshare2-f8d19",
		storageBucket: "rideshare2-f8d19.appspot.com",
		messagingSenderId: "255084167707",
		appId: "1:255084167707:web:4e2e75f495b93b91a5aebe",
		measurementId: "G-Q18F5FLBH2",
	});
} catch (err) {
	// ignore app already initialized error in snack
}
//  navigationOptions = ({ navigation }) => SetNavOptions('Topics', navigation)

const LoginScreen = (props) => {
  const { navigation, route } = props;
  const recaptchaVerifier = React.useRef(null);
	const [phoneNumber, setPhoneNumber] = React.useState();
	const [verificationId, setVerificationId] = React.useState();
	const [verificationCode, setVerificationCode] = React.useState();
const phoneInput = useRef(null);
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
				<Image
					source={Logo}
					style={{ width: 300, height: 300, marginTop: 20 }}
				></Image>

				<FirebaseRecaptchaVerifierModal
					ref={recaptchaVerifier}
					firebaseConfig={firebaseConfig}
				/>
				<View
					style={{
						flex: 1,
						backgroundColor: "#2153CC",
						width: android.width,
						borderTopLeftRadius: 30,
						borderTopRightRadius: 30,
						marginTop: 50,
					}}
				>
					<Text
						style={{
							marginTop: 40,
							marginLeft: 10,
							marginBottom: 10,
							color: "#ffff",
							fontSize: 18,
							fontWeight: "bold",
						}}
					>
						Enter phone number
					</Text>
					<PhoneInput
						containerStyle={{
							width: android.width,
							borderRadius: 90,
						}}
						textContainerStyle={{ borderRadius: 90 }}
						ref={phoneInput}
						defaultValue={phoneNumber}
						defaultCode="PK"
						layout="first"
						withShadow
						autoFocus
						onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
						onChangeFormattedText={(text) => {
							setPhoneNumber(text);
						}}
					/>

					<Pressable
						onPress={async () => {
							// The FirebaseRecaptchaVerifierModal ref implements the
							// FirebaseAuthApplicationVerifier interface and can be
							// passed directly to `verifyPhoneNumber`.
							try {
								const phoneProvider = new firebase.auth.PhoneAuthProvider();
								await phoneProvider
									.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
									.then(setVerificationId);
								//   console.log(verificationId)

								//   props.navigation.navigate("Account", {
								// 		screen: "Profile",
								// 		params: { Phone: phoneNumber },
								// 	});

								props.navigation.navigate("Verification", {
									verificationId: verificationId,
									Phone: phoneNumber,
								});
							} catch (err) {
								showMessage({
									text: `Error: ${err.message}`,
									color: "red",
								});
							}
						}}
					>
						<View style={styles.button}>
							<Text style={{ color: "#2153CC", fontWeight: "bold" }}>
								Get OTP
							</Text>
						</View>
					</Pressable>
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
	image: {
		flex: 1,
	},
	image_imageStyle: {},
	welcomeTo: {
		color: "rgba(6,66,136,1)",
		fontSize: 32,

		height: 38,
		marginTop: 89,
		alignSelf: "center",
	},
	image2: {
		width: 195,
		height: 172,
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
});

export default LoginScreen;