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
import Reviews from "./Reviews";

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
const ActionSheet = (props) => {
	const [DriverName, setDriverName] = useState("")
	const [CarName, setCarName] = useState("")
	const [Carplate, setCarplate] = useState("")
	const [Driverpic, setDriverpic] = useState()
	const [pickUp, setpickUp] = useState("")
	const [tripEnd, settripEnd] = useState(false)
	const [Review, setReview] = useState([])
	const snapPoints = React.useMemo(() => ["37%", "50%", "70%"], []);
	const RBRef = React.useRef();
	useEffect(async() => {
	  let result = await SecureStore.getItemAsync("DriverID");
	  const db = getDatabase();

		// const Ref = getDatabase().ref("Drivers");
		onValue(ref(db, `DriverPosts/${result}`), (querySnapShot) => {
			let data = querySnapShot.val() || {};
			setDriverName(data.Fullname)
			setCarName(data.carName)
			setCarplate(data.carplate)
			setDriverpic(data.Profilepic)
			setpickUp(data.Pickup)

			
		});
		onValue(ref(db, "Reviws/"),(querySnapShot)=>{
			querySnapShot.forEach((childSnapShot)=>{
				let DriverID=childSnapShot.child("DriverID").val()
				if (DriverID==result) {
					settripEnd(true)
					
				} else {
					settripEnd(false)
					console.log("Drivernotexist")
					
				}
			})
		});
		
	}, [])
	useEffect(() => {
	 const db=getDatabase()
	 onValue(ref(db, "Reviws/"), (querySnapShot) => {
			let data = querySnapShot.val() || {};

			const list = [];

			for (let key in data ? data : []) {
				list.push({ key, ...data[key] });
			}
			setReview(list);
		});
	}, [tripEnd])
	
	
const renderTask = ({ item }) => {
	return (
		<Reviews Userpic={item.Userpic} Username={item.Username} Reviews={item.Reviwes} />
	);
};

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
						source={{ uri: Driverpic }}
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
						{DriverName}
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
					<Text style={{ color: "white", marginLeft: "42%" }}>{CarName}</Text>
					<Text style={{ color: "white", marginLeft: "42%" }}>{Carplate}</Text>
					<Text style={{ color: "white", marginLeft: "26%", marginTop: 20 }}>
						Pick-up Point
					</Text>
					<Text style={{ color: "white", marginLeft: "26%" }}>{pickUp}</Text>
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
					<FlatList
						
						data={Review}
						renderItem={renderTask}
						keyExtractor={(item) => item.key}
						
					/>
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
