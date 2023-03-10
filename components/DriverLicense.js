import React from 'react'
import { Text, View,Dimensions,StyleSheet ,TextInput,Image, Pressable} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../assets/card.jpg'


const DriverLicense = () => {
  return (
		<View style={styles.container}>
			<ScrollView >
				<View
					style={{
						marginTop: 50,
						backgroundColor: "#FFF",
						paddingVertical: 40,
						borderRadius: 30,
						elevation: 10,
					}}
				>
					<Text
						style={{
							textAlign: "center",
							fontSize: 22,
							fontWeight: "bold",
						}}
					>
						Lincese Number
					</Text>
					<TextInput
						style={{
							width: "50%",
							marginLeft: "25%",
							borderRadius: 10,
							textAlign: "center",
							backgroundColor: "#FFFDD0",
							marginTop: 10,
							paddingVertical: 10,
							elevation: 5,
						}}
						keyboardType="name-phone-pad"
						label="Lincese Number"
						placeholder="Lincese Number"
					/>
				</View>
				<View
					style={{
						marginTop: 50,
						backgroundColor: "#FFF",
						paddingVertical: 10,
						borderRadius: 30,
						elevation: 10,
					}}
				>
					<Image
						source={Card}
						style={{ width: 300, height: 200, marginTop: 30, marginLeft: 30 }}
					/>
					<Text
						style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
					>
						Front Side
					</Text>
					<View style>
						<Text
							style={{
								borderColor: "#fcc200",
								borderRadius: 40,
								borderWidth: 1,
								width: "30%",
								textAlign: "center",
								paddingVertical: 10,
								marginLeft: "35%",
								marginTop: 10,
							}}
						>
							Add Photo
						</Text>
					</View>
				</View>
				<View
					style={{
						marginTop: 50,
						backgroundColor: "#FFF",
						paddingVertical: 10,
						borderRadius: 30,
						elevation: 10,
					}}
				>
					<Image
						source={Card}
						style={{ width: 300, height: 200, marginTop: 30, marginLeft: 30 }}
					/>
					<Text
						style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
					>
						Front Side
					</Text>
					<View style>
						<Text
							style={{
								borderColor: "#fcc200",
								borderRadius: 40,
								borderWidth: 1,
								width: "30%",
								textAlign: "center",
								paddingVertical: 10,
								marginLeft: "35%",
								marginTop: 10,
                marginBottom:30
							}}
						>
							Add Photo
						</Text>
					</View>
				</View>
        <Pressable>
          <Text style={styles.button}>Next</Text>
        </Pressable>
			</ScrollView>
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
    marginBottom:20
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
export default DriverLicense