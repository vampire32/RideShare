import React from "react";
import { SafeAreaView,View,Image,Text,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import user from "../assets/images/avatar2.jpeg";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialIcons";
const ActionSheet = (props) => {
	const snapPoints = React.useMemo(() => ["37%", "50%", "70%"], []);
	const RBRef = React.useRef();

	
	return (
		<>
			<BottomSheet
				ref={RBRef}
				index={0}
				snapPoints={snapPoints}
				handleIndicatorStyle={tw`bg-gray-300 w-16 h-1`}
				contentContainerStyle={styles.contentContainer}
				backgroundStyle={styles.contentContainer}
			>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						borderBottomWidth: 1,
						borderColor: "#EDE4E0",
						paddingBottom: 5,
					}}
				>
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
							color: "#fff",
							marginTop: 25,

							marginLeft: 50,
							fontWeight: "bold",
						}}
					>
						Amjad Khan
					</Text>

					<Icon
						name="call"
						size={15}
						color="#2153CC"
						style={{
							marginTop: 12,
							backgroundColor: "#fff",
							padding: 15,
							borderRadius: 90,
							marginLeft: 15,
						}}
					/>

					<Icon
						name="message"
						size={15}
						color="#2153CC"
						style={{
							marginTop: 12,
							backgroundColor: "#fff",
							padding: 15,
							borderRadius: 90,
							marginLeft: 15,
						}}
					/>
					<Text style={{ color: "white", marginLeft: "42%" }}>BMW M5</Text>
					<Text style={{ color: "white", marginLeft: "42%" }}>ISB 3390</Text>
					<Text style={{ color: "white", marginLeft: "26%", marginTop: 20 }}>
						Pick-up Point
					</Text>
					<Text style={{ color: "white", marginLeft: "26%" }}>
						Hostel City Chak Shezad
					</Text>
					<Text style={{ color: "white", marginLeft: "26%", marginTop: 40 }}>
						Drop-off point
					</Text>
					<Text style={{ color: "white", marginLeft: "26%" }}>
						E-9 Main Margalla Road
					</Text>
				</View>

				<View>
					<Text
						style={{
							textAlign: "center",
							fontSize: 22,
							fontWeight: "bold",
							color: "white",
						}}
					>
						Reviwes
					</Text>
					<ScrollView>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
						<View>
							<View
								style={{
									flexDirection: "row",
									flexWrap: "wrap",
								}}
							>
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
										textAlign: "left",
										fontSize: 18,
										color: "#fff",
										marginTop: 25,

										marginLeft: 10,
										fontWeight: "bold",
									}}
								>
									Amjad Khan
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									borderBottomWidth: 1,
									borderColor: "#EDE4E0",
									paddingBottom: 5,
								}}
							>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
								<Icon
									name="star"
									size={28}
									color="#FFBF00"
									style={{ marginTop: 3 }}
								/>
							</View>
						</View>
					</ScrollView>
				</View>
			</BottomSheet>
		</>
	);
};
const styles = StyleSheet.create({
	contentContainer: {
		backgroundColor: "#2153CC",
	},
});

export default ActionSheet;
