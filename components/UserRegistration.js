import React, { useState } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";
import Logo from "../assets/logo.png";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import bg from "../assets/images/bg2.png";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

const UserRegistration = (props) => {
	const { navigation, route } = props;
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("gender");
	const [items, setItems] = useState([
		{ label: "Male", value: "male" },
		{ label: "Female", value: "female" },
	]);
	return (
		<>
			<ImageBackground source={bg} resizeMode="cover" >
				<View
					style={{
						flexDirection:"column",
						
						alignItems: "center",
						marginTop: 80,
					}}
				>
					<View
						style={{
							backgroundColor: "#043F96",
							borderRadius: 90,
						}}
					>
						<Image source={Logo} style={{ width: 150, height: 150 }}></Image>
					</View>

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
								label="Enter Tour Name"
								style={styles.input}
								placeholder="Ahmed Ali"
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
								label="info@mail.com"
								style={styles.input}
								placeholder="Ahmed Ali"
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
							<DropDownPicker
							style={{width:android.width/1.1 }}
								placeholder="Select an gender"
								open={open}
								value={value}
								items={items}
								setOpen={setOpen}
								setValue={setValue}
								setItems={setItems}
								multiple={false}
							/>
							<TouchableHighlight
								onPress={() => {
									navigation.replace("Dashboard");
								}}
							>
								<View style={styles.button}>
									<Text style={{ color: "white", fontWeight: "bold" }}>
										Done
									</Text>
								</View>
							</TouchableHighlight>
						</BlurView>
					</ScrollView>
				</View>
			</ImageBackground>
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
});

export default UserRegistration;
