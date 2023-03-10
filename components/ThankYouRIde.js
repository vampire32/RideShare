import React from 'react'
import { View,Text,TextInput,Pressable,StyleSheet,Dimensions } from 'react-native'


const ThankYouRIde = () => {
  return (
		<View style={{ flex: 1, marginTop: 40 }}>
			<Text
				style={{
					textAlign: "center",
					fontSize: 32,
					marginTop: 20,
					color: "#043F96",
					fontWeight: "bold",
				}}
			>
				Thank for Your Ride
			</Text>
			<TextInput
				style={{
					width: "50%",
					marginLeft: "25%",
					borderRadius: 10,
					textAlign: "center",
					backgroundColor: "#FFFDD0",
					marginTop: 50,
					paddingVertical: 10,
					elevation: 5,
				}}
				keyboardType="name-phone-pad"
				label="Amountr"
				placeholder="Amount"
			/>
			<Text
				style={{
					marginTop: 40,
					marginStart: 20,
					fontSize: 18,
					color: "#043F96",
					fontWeight: "bold",
				}}
			>
				Reviwes
			</Text>
			<TextInput
				style={{
					width: "80%",
					height: "20%",
					justifyContent: "center",
					marginLeft: "10%",
					borderRadius: 10,
					textAlign: "center",
					backgroundColor: "#FFFDD0",
					marginTop: 30,
					paddingVertical: 10,
					elevation: 5,
				}}
				keyboardType="name-phone-pad"
				label="Amountr"
				placeholder="Amount"
			/>
			<Pressable>
				<Text style={styles.button}>Done</Text>
			</Pressable>
		</View>
	);
}
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height,
		backgroundColor: "#fff",
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
export default ThankYouRIde
