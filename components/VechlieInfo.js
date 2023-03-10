import React from 'react'
import { Image, TouchableHighlight, View,Text,StyleSheet,Dimensions,Pressable } from 'react-native'
import { TextInput } from 'react-native-paper'
import Logo from "../assets/person-icon-5.png"
import Icon from '../assets/free-car-icon-1057-thumb.png'
import Icon2 from '../assets/cer.png'

const VechlieInfo = (props) => {
    const { navigation, route } = props;
  return (
		<View
			style={{
				backgroundColor: "#fff",
				width: android.width,
				height: android.height,
			}}
		>
			<Text
				style={{
					marginTop: 70,
					marginBottom: 30,
					textAlign: "center",
					fontSize: 28,
					fontWeight: "bold",
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
				}}
			>
				Vechlie Name and Color
			</Text>
			<TextInput
				style={styles.input}
				label="Vechlie Name and Color"
				placeholder="Vechlie Name and Color"
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
				Number Plate
			</Text>
			<TextInput
				style={styles.input}
				label="Enter your Number Plate"
				placeholder="Enter your Number Plate"
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
				}}
			>
				Ceritficate of your Vechlie
			</Text>

			<View style={{flexDirection:'row'}}>
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
export default VechlieInfo;