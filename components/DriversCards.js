import React,{useState,useEffect} from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ImageBackground,
	TouchableHighlight,
	ScrollView,
	Button,
	Pressable
} from "react-native";
import bg from "../assets/images/bg2.png";
import user from "../assets/images/avatar2.jpeg";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';
import * as SecureStore from "expo-secure-store";

const DriversCards = ({
	profilepic,
	Driverid,
	DriverNumber,
	carname,
	Pickup,
	Destination,
	carplate,
	DriverNum,
	Date,
	Time
}) => {
	const navigation = useNavigation();
	// const [Driverid2, setDriverid] = useState();
	const [address, setaddress] = useState();
	// useEffect(() => {
	// console.log(DriverNum)
	// const fetch =async()=>{
	// 	await SecureStore.setItemAsync("DriverPhone",DriverNum)


	// }
	// }, [])

	return (
		<Pressable style={styles.box} >
			<Image
				source={{ uri: profilepic }}
				style={{
					width: 50,
					height: 50,
					borderRadius: 90,
					marginLeft: 25,
					marginTop: 10,
				}}
			/>

			<Text
				style={{
					textAlign: "center",

					fontSize: 20,
					color: "#2153CC",
					marginTop: 25,

					marginLeft: 50,
					fontWeight: "bold",
				}}
			>
				{DriverNumber}
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 20,
					color: "#2153CC",

					marginLeft: 50,
					fontWeight: "bold",
				}}
			></Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					color: "#2153CC",

					marginLeft: 125,
				}}
			>
				{carname}
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 20,
					color: "#2153CC",

					marginLeft: 50,
					fontWeight: "bold",
				}}
			></Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					color: "#2153CC",

					marginLeft: 125,
				}}
			>
				{carplate}
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					color: "#2153CC",

					marginLeft: 125,
				}}
			>
				{Date}
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					color: "#2153CC",

					marginLeft: 125,
				}}
			>
				{Time}
			</Text>

			<Text
				style={{
					textAlign: "center",
					fontSize: 20,
					color: "#2153CC",

					marginLeft: 50,
					fontWeight: "bold",
				}}
			></Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					color: "#2153CC",

					marginLeft: 125,
				}}
				numberOfLines={1}
			>
				{Pickup}
			</Text>
			<Text
				style={{
					textAlign: "center",
					fontSize: 18,
					color: "#2153CC",

					marginLeft: 125,
				}}
				numberOfLines={1}
			>
				{Destination}
			</Text>
			<TouchableHighlight
				onPress={() => {
					navigation.navigate("Dashboard");
				}}
			>
				<View style={styles.button}>
					<Text style={{ fontWeight: "bold" }}>Cancel</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight
				onPress={() => {
					Driverid()
					navigation.navigate("SelectSeat");
				}}
			>
				<View style={styles.button2}>
					<Text style={{ color: "white", fontWeight: "bold" }}>Select</Text>
				</View>
			</TouchableHighlight>
		</Pressable>
	);
};
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		
        flexDirection:'row',
		with: android.width * 1.2,
		height: android.height * 1.2,
		backgroundColor: "#2153CC",
	},
	image: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		// backgroundColor: "#1F4690",
		justifyContent: "center",
	},
	text: {
		color: "white",
		fontSize: 42,

		fontWeight: "bold",
		textAlign: "center",
	},
	bg: {
		width: android.width,
	},
	box: {
		backgroundColor: "white",
		width: android.width,
		height: 280,
		borderRadius: 32,
		marginTop: 30,
		flexDirection: "row",
		flexWrap: "wrap",
	},
	button: {
		alignItems: "center",
		backgroundColor: "white",

		padding: 13,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: 130,
		marginLeft: 50,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
		borderWidth: 1,
		borderColor: "black",
	},
	button2: {
		alignItems: "center",
		backgroundColor: "#2153CC",
		color: "white",
		padding: 13,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,

		width: 130,
		marginLeft: 30,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderTopRightRadius: 20,
		marginTop: 10,
	},
});

export default DriversCards