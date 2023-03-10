import React from "react";
import { SafeAreaView,View,Image,Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import user from "../assets/images/avatar2.jpeg";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialIcons";
const ActionSheet = (props) => {
	const snapPoints = React.useMemo(() => ["12%", "50%", "70%"], []);
	const RBRef = React.useRef();

	
	return (
		<>
			<BottomSheet
				ref={RBRef}
				index={0}
				snapPoints={snapPoints}
				handleIndicatorStyle={tw`bg-gray-300 w-16 h-1`}
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
							color: "#043F96",
							marginTop: 25,

							marginLeft: 50,
							fontWeight: "bold",
						}}
					>
						Amjad Khan
					</Text>

					<View
						style={{
							backgroundColor: "#54B435",
							borderRadius: 90,
							borderWidth: 1,
							paddingHorizontal: 15,
							borderColor: "#fff",
							marginLeft: 50,
						}}
					>
						<Icon
							name="call"
							size={28}
							color="#fff"
							style={{ marginTop: 12 }}
						/>
					</View>
				</View>
				<View>
					<Text
						style={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}
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
										color: "#043F96",
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
										color: "#043F96",
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
										color: "#043F96",
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
										color: "#043F96",
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
										color: "#043F96",
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
										color: "#043F96",
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
										color: "#043F96",
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

export default ActionSheet;
