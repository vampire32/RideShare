import React from 'react'
import { Image, TouchableHighlight, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import Logo from "../assets/person-icon-5.png"

const BasicInfo = (props) => {
    const { navigation, route } = props;
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
					<Image source={Logo} style={{ width: 80, height: 80 }}></Image>
				</View>
				<TouchableHighlight>
					<Text
						style={{
							marginTop: 10,
							paddingTop: 10,
							borderColor: "#fcc200",
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
			/>
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