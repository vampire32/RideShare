import React, { Component,useState } from "react";
import { StyleSheet, View, Image, Text,TouchableHighlight,ImageBackground,Dimensions,Modal } from "react-native";
import bg from "../assets/images/bg2.png";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome5";

function Profile(props) {
	const [ModalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.container}>
			<ImageBackground source={bg} resizeMode="cover" style={styles.container}>
				<Image
					source={require("../assets/images/download.png")}
					resizeMode="contain"
					style={styles.image}
				></Image>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<Icon
						name="person"
						size={40}
						color="#FFBF00"
						style={{ marginTop: 20 }}
					/>
					<Text
						style={{
							marginTop: 25,
							fontSize: 24,
							color: "#fff",
							fontWeight: "bold",
						}}
					>
						Hassan Tariq
					</Text>
					<Text style={{ padding: 24 }}></Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<Icon
						name="email"
						size={40}
						color="#FFBF00"
						style={{ marginTop: 20 }}
					/>
					<Text
						style={{
							marginTop: 25,
							fontSize: 24,
							color: "#fff",
							fontWeight: "bold",
						}}
					>
						Hkhankor@gmail.com
					</Text>
					<Text style={{ padding: 1 }}></Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<Icon
						name="phone"
						size={40}
						color="#FFBF00"
						style={{ marginTop: 20 }}
					/>
					<Text
						style={{
							marginTop: 25,
							fontSize: 24,
							color: "#fff",
							fontWeight: "bold",
						}}
					>
						+923169089872
					</Text>
					<Text style={{ padding: 24 }}></Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<Icon2
						name="venus-mars"
						size={40}
						color="#FFBF00"
						style={{ marginTop: 20 }}
					/>
					<Text
						style={{
							marginTop: 25,
							fontSize: 24,
							color: "#fff",
							fontWeight: "bold",
						}}
					>
						Male
					</Text>
					<Text style={{ padding: 24 }}></Text>
				</View>

				<TouchableHighlight
					onPress={() => {
						setModalVisible(true);
					}}
				>
					<View style={styles.button}>
						<Text style={{ color: "white", fontWeight: "bold" }}>Update</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={ModalVisible}
						onRequestClose={() => {
							alert("Modal has been closed.");
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text
									style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}
								>
									In Case Of Emergency!
								</Text>

								<TouchableHighlight
									onPress={() => {
										setModalVisible(false);
									}}
								>
									<Text style={styles.button2}>Close</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Modal>
				</View>
			</ImageBackground>
		</View>
	);
}

const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height,
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
	image: {
		width: 121,
		height: 133,
		marginTop: 50,
		marginLeft: 127,
	},
	button2: {
		width: 150,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "#fcc200",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
		textAlign: "center",
		color: "#fff",
		fontSize: 18,
		fontWeight: "500",
		marginTop: 15,
	},

	buttonItem: {
		textAlign: "center",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "#043F96",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});

export default Profile;
