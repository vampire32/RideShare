import React from 'react'
import { View,Text,Dimensions,StyleSheet,Pressable } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
const android = Dimensions.get("window");
const DriverReg = (props) => {
	const { navigation, route } = props;

  return (
		<View style={styles.container}>
			<Text
				style={{
					marginTop: "15%",
					textAlign: "center",
					fontSize: 28,
					fontWeight: "bold",
					color:"white"
				}}
			>
				Welcome To Driver Mode
			</Text>

			<View
				style={{
					backgroundColor: "#ffff",
					elevation: 7,
					borderRadius: 20,
					paddingBottom: 20,
					marginTop: 50,
				}}
			>
				<Pressable
					onPress={() => {
						navigation.replace("BasicInfo");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Icon name="info" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Basic Information
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("VechlieInfo");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Icon name="drive-eta" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Vechlie Information
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("IdConfrim");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Icon name="badge" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							ID Confirmation
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("DriverLicense");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Icon name="badge" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							Driver Licence
						</Text>
					</View>
				</Pressable>
				<Pressable
					onPress={() => {
						navigation.replace("CNIC");
					}}
				>
					<View
						style={{
							flexDirection: "row",
							marginTop: 20,
							marginLeft: 10,
							borderBottomWidth: 1,
							borderColor: "#808080",
						}}
					>
						<Icon name="badge" color="#2153CC" size={40} />
						<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 5 }}>
							CNIC
						</Text>
					</View>
				</Pressable>
			</View>
			<Pressable onPress={()=>{
				navigation.replace("DriverDashboard");
			}}>
				<Text style={styles.button}>Confirm</Text>
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height * 1.5,
		backgroundColor: "#2153CC",
	},
	Text: {
		color: "#ffff",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#fff",
		color: "#2153CC",
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
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",

		marginTop: "50%",
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

export default DriverReg
