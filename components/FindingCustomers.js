import React, { useEffect } from "react";
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
} from "react-native";
import bg from "../assets/images/bg2.png";
import user from '../assets/images/avatar2.jpeg'
const FindingCustomers = (props) => {
  return (
		<ScrollView>
			<ImageBackground style={styles.container} source={bg} resizeMode="cover">
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Text
						style={{
							textAlign: "center",
							fontSize: 32,
							color: "#fff",
							marginTop: 30,
							fontWeight: "bold",
						}}
					>
						Searching Ride
					</Text>
				</View>
				<View style={styles.box}>
					<Image
						source={user}
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
							color: "#043F96",
							marginTop: 25,

							marginLeft: 50,
							fontWeight: "bold",
						}}
					>
						Ahmed Ali
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						Suzuki Alto Black
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						ISB 3390
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						Hostel City Chak Shezad
					</Text>
					<TouchableHighlight
						onPress={() => {
							props.navigation.replace("Dashboard");
						}}
					>
						<View style={styles.button}>
							<Text style={{ fontWeight: "bold" }}>Cancel</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => {
							props.navigation.replace("CheckingSeats");
						}}
					>
						<View style={styles.button2}>
							<Text style={{ color: "white", fontWeight: "bold" }}>Select</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.box}>
					<Image
						source={user}
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
							color: "#043F96",
							marginTop: 25,

							marginLeft: 50,
							fontWeight: "bold",
						}}
					>
						Ahmed Ali
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						Suzuki Alto Black
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						ISB 3390
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						Hostel City Chak Shezad
					</Text>
					<TouchableHighlight
						onPress={() => {
							navigation.replace("Dashboard");
						}}
					>
						<View style={styles.button}>
							<Text style={{ fontWeight: "bold" }}>Cancel</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => {
							navigation.replace("CheckingSeats");
						}}
					>
						<View style={styles.button2}>
							<Text style={{ color: "white", fontWeight: "bold" }}>Select</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.box}>
					<Image
						source={user}
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
							color: "#043F96",
							marginTop: 25,

							marginLeft: 50,
							fontWeight: "bold",
						}}
					>
						Ahmed Ali
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						Suzuki Alto Black
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						ISB 3390
					</Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 20,
							color: "#043F96",

							marginLeft: 50,
							fontWeight: "bold",
						}}
					></Text>
					<Text
						style={{
							textAlign: "center",
							fontSize: 18,
							color: "#043F96",

							marginLeft: 125,
						}}
					>
						Hostel City Chak Shezad
					</Text>
					<TouchableHighlight
						onPress={() => {
							navigation.replace("Dashboard");
						}}
					>
						<View style={styles.button}>
							<Text style={{ fontWeight: "bold" }}>Cancel</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={() => {
							navigation.replace("CheckingSeats");
						}}
					>
						<View style={styles.button2}>
							<Text style={{ color: "white", fontWeight: "bold" }}>Select</Text>
						</View>
					</TouchableHighlight>
				</View>
			</ImageBackground>
		</ScrollView>
	);
}
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		with: android.width * 1.2,
		height: android.height * 1.2,
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
		height: 199,
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
		backgroundColor: "#FAD860",
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
export default FindingCustomers
