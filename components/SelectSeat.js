import React, { Component ,useState,useEffect} from "react";
import { StyleSheet, View, Image, Text,Button,Dimensions,ImageBackground,TouchableHighlight } from "react-native";
import Car from '../assets/car.png'
import bg from "../assets/images/bg.png";
import MapVieww from "./CurrentLocation";
import { Pressable } from "react-native";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue,child } from "firebase/database";
import { getAuth } from "firebase/auth";
import * as SecureStore from "expo-secure-store";
import DriverPickupDroffLocation from "./DriverPickupDroffLocation";


const firebaseConfig = {
	apiKey: "AIzaSyDIA92OSKTB-lKS-xiBoS_EKDrGHlpVJ_Q",
	authDomain: "carsharing-10784.firebaseapp.com",
	projectId: "carsharing-10784",
	storageBucket: "carsharing-10784.appspot.com",
	messagingSenderId: "1059995999394",
	appId: "1:1059995999394:web:f6bc2c89ea71eed547cbfb",
	measurementId: "G-WXGTPM42JS",
};
const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);
function SelectSeat(props) {
	const [colorIndex, setColorIndex] = useState(0);
	const [colorIndex2, setColorIndex2] = useState(0);
	const [colorIndex3, setColorIndex3] = useState(0);
	const [colorIndex4, setColorIndex4] = useState(0);
	const colors = ["gray", "blue", "pink"];
	const changeColor = () => {
		// Increment the colorIndex, looping back to 0 when reaching the end of the colors array
		setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
	};
	const changeColor2 = () => {
		// Increment the colorIndex, looping back to 0 when reaching the end of the colors array
		setColorIndex2((prevColorIndex2) => (prevColorIndex2 + 1) % colors.length);
	};
	const changeColor3 = () => {
		// Increment the colorIndex, looping back to 0 when reaching the end of the colors array
		setColorIndex3((prevColorIndex3) => (prevColorIndex3 + 1) % colors.length);
	};
	const changeColor4 = () => {
		// Increment the colorIndex, looping back to 0 when reaching the end of the colors array
		setColorIndex4((prevColorIndex3) => (prevColorIndex3 + 1) % colors.length);
	};

	const containerStyle = {
		backgroundColor: colors[colorIndex],
	};
	const containerStyle2 = {
		backgroundColor: colors[colorIndex2],
	};
	const containerStyle3 = {
		backgroundColor: colors[colorIndex3],
	};
	const containerStyle4 = {
		backgroundColor: colors[colorIndex4],
	};
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Gender, setGender] = useState("");
	const [Phone, setPhone] = useState("");
	const [Seat, setSeat] = useState("")
	const [DriverID, setDriverID] = useState("")
	useEffect(() => {
		const fetch=async()=>{
			let result = await SecureStore.getItemAsync("PhoneNum");
			let driverid = await SecureStore.getItemAsync("DriverID");
			setDriverID(driverid);

			const db = getDatabase();
			onValue(ref(db, `users/${result}`), (querySnapShot) => {
				let data = querySnapShot.val() || {};
				console.log(data);
				setName(data.Fullname);
				setPhone(data.Phone);
				setGender(data.Gender);
			});


		}
		fetch()
	  
	
    
	
	  
	}, [])
	let Seat1 = "1";
	let Seat2 = "2";
	let Seat3 = "3";
	let Seat4 = "4";
const handleChangeSeat1 = () => {
	setSeat(Seat1);
};
const handleChangeSeat2 = () => {
	setSeat(Seat2);
};
const handleChangeSeat3 = () => {
	setSeat(Seat3);
};
const handleChangeSeat4 = () => {
	setSeat(Seat4);
};
	const Submit = () => {
		const db = getDatabase();
		set(ref(db, "Seats/" + Phone), {
			Fullname: Name,
			
			Gender: Gender,
			Phone: Phone,
			SeatNumber:Seat,
			DriverID:DriverID,
		});
	};
	
	return (
		<View style={styles.container}>
			<View style={styles.map}>
				<DriverPickupDroffLocation/>
			</View>

			{/* <Button
				style={styles.cupertinoButtonPurple}
			></Button> */}
			<View
				style={{
					backgroundColor: "#2153CC",
					borderTopStartRadius: 15,
					borderTopEndRadius: 15,
					paddingBottom: 300,
				}}
			>
				<View style={{ flexDirection: "row", marginStart: 5, marginTop: 10 }}>
					<View
						style={{ backgroundColor: "blue", padding: 10, width: 10 }}
					></View>
					<Text style={{ marginStart: 3, color: "#fff" }}>Male</Text>
				</View>
				<View style={{ flexDirection: "row", marginStart: 5 }}>
					<View
						style={{ backgroundColor: "pink", padding: 10, width: 10 }}
					></View>
					<Text style={{ marginStart: 3, color: "#fff" }}>Female</Text>
				</View>
				<View style={{ flexDirection: "row", marginStart: 5 }}>
					<View
						style={{ backgroundColor: "yellow", padding: 10, width: 10 }}
					></View>
					<Text style={{ marginStart: 3, color: "#fff" }}>Driver</Text>
				</View>
				<View style={styles.group2}>
					<View style={styles.rectRow}>
						<Pressable
							onPress={() => {
								changeColor();
								handleChangeSeat1();
							}}
						>
							<View style={[styles.rect, containerStyle]}>
								<Text style={styles.loremIpsum}>1</Text>
							</View>
						</Pressable>

						<View style={styles.rect1}>
							<Text style={styles.driver}>Driver</Text>
						</View>
					</View>
					<View style={styles.rect2Row}>
						<Pressable
							onPress={() => {
								changeColor2();
								handleChangeSeat2();
							}}
						>
							<View style={[styles.rect2, containerStyle2]}>
								<Text style={styles.loremIpsum}>2</Text>
							</View>
						</Pressable>
						<Pressable
							onPress={() => {
								changeColor3();
								handleChangeSeat3();
							}}
						>
							<View style={[styles.rect3, containerStyle3]}>
								<Text style={styles.loremIpsum}>3</Text>
							</View>
						</Pressable>
						<Pressable
							onPress={() => {
								changeColor4();
								handleChangeSeat4();
							}}
						>
							<View style={[styles.rect4, containerStyle4]}>
								<Text style={styles.loremIpsum}>4</Text>
							</View>
						</Pressable>
					</View>
				</View>
				<TouchableHighlight
					onPress={() => {
						Submit();
						props.navigation.replace("RouteScreen");
					}}
				>
					<View style={styles.button}>
						<Text style={{ color: "#2153CC", fontWeight: "bold" }}>Done</Text>
					</View>
				</TouchableHighlight>
			</View>
		</View>
	);
}
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	map: {
		height: "42%",
		// marginBottom: -10,
	},
	container: {
		flex: 1,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#ffff",
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
	image: {
		position: "absolute",
		height: 200,
		width: android.width,
		top: 11,
		left: 0,
		right: 0,
	},
	loremIpsum1: {
		top: 0,
		left: 34,
		position: "absolute",

		color: "rgba(255,255,255,1)",
		fontSize: 18,
	},
	imageStack: {
		height: 284,
		marginTop: 39,
	},
	rect7: {
		width: 17,
		height: 21,
		backgroundColor: "rgba(248,231,28,1)",
	},
	driver2: {
		color: "#121212",
		fontSize: 12,
		marginLeft: 9,
		marginTop: 4,
	},
	group2: {
		width: 317,
		height: 194,
	},
	rectRow: {
		height: 70,
		flexDirection: "row",
		marginLeft: 60,
		marginRight: 57,
	},
	rect: {
		width: 79,
		height: 70,
		
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 12,
		shadowOpacity: 1,
		shadowRadius: 4,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 11,
		marginTop: 11,
	},
	loremIpsum: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 39,
		marginLeft: 34,
	},
	group: {
		width: 79,
		height: 70,
		marginLeft: 42,
		marginTop: 11,
	},
	rect1: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(248,231,28,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 6,
		shadowOpacity: 1,
		shadowRadius: 2,
		borderWidth: 1,
		borderColor: "rgba(106,104,104,1)",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 49,
		marginTop: 11,
	},
	driver: {
		color: "rgba(5,14,107,1)",
		fontSize: 18,
		marginTop: 24,
		marginLeft: 15,
	},
	rect7Row: {
		height: 81,
		flexDirection: "row",
		marginTop: 87,
		marginLeft: 13,
		marginRight: 79,
	},
	rect2: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(255,121,255,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 9,
		shadowOpacity: 1,
		shadowRadius: 3,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
	},
	loremIpsum2: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 41,
		marginLeft: 34,
	},
	rect3: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(142,141,141,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 9,
		shadowOpacity: 1,
		shadowRadius: 3,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 49,
	},
	loremIpsum3: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 41,
		marginLeft: 34,
	},
	rect4: {
		width: 79,
		height: 70,
		backgroundColor: "rgba(142,141,141,1)",
		shadowColor: "rgba(0,0,0,1)",
		shadowOffset: {
			width: 2,
			height: 0,
		},
		elevation: 9,
		shadowOpacity: 1,
		shadowRadius: 3,
		borderWidth: 0,
		borderColor: "#000000",
		borderTopLeftRadius: 26,
		borderTopRightRadius: 26,
		marginLeft: 31,
	},
	loremIpsum4: {
		color: "rgba(255,255,255,1)",
		fontSize: 18,
		marginTop: 41,
		marginLeft: 34,
	},
	rect2Row: {
		height: 70,
		flexDirection: "row",
		marginTop: 53,
		marginLeft: 22,
		marginRight: 21,
	},
	cupertinoButtonPurple: {
		height: 44,
		width: 257,
		marginTop: 61,
		alignSelf: "center",
	},
	rect5: {
		width: 17,
		height: 21,
		backgroundColor: "rgba(3,68,142,1)",
	},
	male: {
		color: "#121212",
		fontSize: 12,
		marginLeft: 5,
		marginTop: 4,
	},
	rect5Row: {
		height: 21,
		flexDirection: "row",
		marginTop: -389,
		marginLeft: 13,
		marginRight: 299,
	},
	rect6: {
		width: 17,
		height: 21,
		backgroundColor: "rgba(255,121,255,1)",
	},
	female: {
		color: "#121212",
		fontSize: 12,
		marginLeft: 9,
		marginTop: 4,
	},
	rect6Row: {
		height: 21,
		flexDirection: "row",
		marginTop: 19,
		marginLeft: 13,
		marginRight: 282,
	},
});

export default SelectSeat;
