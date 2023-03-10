import React from 'react'
import { FlatList, Image, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import Logo from '../assets/der.jpg'

const IdConfrim = (props) => {
   const { navigation, route } = props;
  return (
		<View style={styles.container}>
			<Text
				style={{
					marginTop: 70,
					textAlign: "center",
					fontSize: 28,
					fontWeight: "bold",
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
					source={Logo}
					style={{ width: 150, height: 150, borderRadius: 20 }}
				/>
				<Text
					style={{
						marginTop: 10,
						marginBottom: 20,
						fontSize: 16,
						borderColor: "#fcc200",
						borderRadius: 40,
						borderWidth: 1,
						paddingBottom: 10,
						paddingLeft: 20,
						paddingRight: 20,
						paddingTop: 10,
					}}
				>
					Add Photo
				</Text>
			</View>

			<Text style={{ textAlign: "justify", fontSize: 16, lineHeight: 30 }}>
				Bring the drivers license in front of you and take a photo as an example
				{"\n"}
				The Photo should clearly show the face and your driver license The Photo
				must be taken in good light and good quality{"\n"} Photos in sunglasses
				are not allowed
			</Text>

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