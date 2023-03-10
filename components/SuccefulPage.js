import React from 'react'
import { View,Image,Text,Dimensions } from 'react-native'
import user from "../assets/images/avatar2.jpeg";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-paper";
const android = Dimensions.get("window");
const SuccefulPage = () => {
  return (
		<View
			style={{
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#1F4690",
				height: "100%",
			}}
		>
			<Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>
				Thank You using Ride Share
			</Text>
			<Image
				source={user}
				style={{
					width: 70,
					height: 70,
					borderRadius: 90,
					marginLeft: 25,
					marginTop: 30,
				}}
			/>
			<Text
				style={{
					fontSize: 18,
					marginTop: 20,
					color: "#fff",
					fontWeight: "bold",
				}}
			>
				Amjad Khan
			</Text>

			<Text
				style={{
					fontSize: 18,
					marginTop: 20,
					color: "#fff",
					fontWeight: "bold",
				}}
			>
				Give Your Review
			</Text>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
                    marginTop:10
				}}
			>
				<Icon name="star" size={28} color="#FFBF00" style={{ marginTop: 3 }} />
				<Icon name="star" size={28} color="#FFBF00" style={{ marginTop: 3 }} />
				<Icon name="star" size={28} color="#FFBF00" style={{ marginTop: 3 }} />
				<Icon name="star" size={28} color="#FFBF00" style={{ marginTop: 3 }} />
			</View>
			<TextInput
				placeholder="Reviws"
				style={{
					borderTopLeftRadius: 20,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					width: android.width,
					backgroundColor: "white",
					height: 60,
					borderTopRightRadius: 20,
					shadowColor: "#000",
				}}
			/>
		</View>
	);
}

export default SuccefulPage