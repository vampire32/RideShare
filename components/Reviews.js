
import React,{useState,useEffect} from "react";
import { SafeAreaView,View,Image,Text,StyleSheet,FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import user from "../assets/images/avatar2.jpeg";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialIcons";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";
const Reviews = ({ Userpic, Username, Reviews }) => {
	return (
		<ScrollView>
			<View>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
					}}
				>
					<Image
						source={{ uri: Userpic }}
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
						{Username}
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
					<Text style={{color:"white",fontSize:18}}>{Reviews}</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Reviews