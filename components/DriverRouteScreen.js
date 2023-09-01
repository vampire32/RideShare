import React,{useState,useEffect} from 'react'
import { Pressable, View,Text, Image,FlatList,Dimensions} from 'react-native'
import UserandDriverLocation from './UserandDriverLocation'
import { Card } from 'react-native-paper';
import user from "../assets/images/avatar2.jpeg";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";
import * as SecureStore from "expo-secure-store";
import DriverRouteCards from './DriverRouteCards';
import { useNavigation,useRoute } from "@react-navigation/native";
const android = Dimensions.get("window");
const firebaseConfig = {
	apiKey: "AIzaSyC-tsScYuvKuNwGFpFEBQhBft-FZBhzRww",
	authDomain: "carsharing2-d254d.firebaseapp.com",
	projectId: "carsharing2-d254d",
	storageBucket: "carsharing2-d254d.appspot.com",
	messagingSenderId: "450530782923",
	appId: "1:450530782923:web:43786c1b9a42666e40b54e",
	measurementId: "G-VVEWZZGFBT",
};
const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);




const DriverRouteScreen = (props) => {
	const { navigation, route } = props;
	 const [tasksList, setTasksList] = useState([]);
	 const [tasksList2, setTasksList2] = useState("");
	 const [dataExists, setDataExists] = useState(false);
	 const [UserSeat, setUserSeat] = useState("")
	 const [userGender, setuserGender] = useState("")

	 let DriverID2 = route.params.DriverID;
		console.log(DriverID2);
	 useEffect(() => {
		
		const fetch =async()=>{
         const db = getDatabase();

					// const Ref = getDatabase().ref("Drivers");
					// onValue(ref(db, "UserPosts/"), (querySnapShot) => {
						
					// 	let data = querySnapShot.val() || {};

					// 	const list = [];

					// 	for (let key in data ? data : []) {
					// 		list.push({ key, ...data[key] });
					// 	}
					// 	setTasksList(list);
					// });
					onValue(ref(db, "Seats/"), (querySnapShot) => {
						querySnapShot.forEach((chideSnapshot) => {
							let data2 = chideSnapshot.child("DriverID").val();
							let data4=chideSnapshot.val()||{}
							
							console.log(data2);

							if (data2 == DriverID2) {
								let data3 = chideSnapshot.child("Phone").val();
								setUserSeat(data4.SeatNumber)
								setuserGender(data4.Gender)
								
								setTasksList2(data3)
								onValue(ref(db, `UserPosts/${data3}`), (querySnapShot) => {
									querySnapShot.forEach((childSnapshot) => {
										let data4 = childSnapshot.child("userPhone").val();
										let data5 = childSnapshot.val();
										console.log(data5.Latitude);
										if (data4 == data3) {
											let data = querySnapShot.val() || {};

											const list = [];

											for (let key in data ? data : []) {
												list.push({ key, ...data[key] });
											}
											setTasksList(list);
											setDataExists(true)
										} else {
											setDataExists(false);
										}
									});
								});
								
							} else {
								console.log("no data");
							}
						});
					});
		}
			fetch()
			
		}, []);
		console.log(dataExists)
useEffect(() => {
	
}, [dataExists])

		
		const renderTask = ({ item }) => {
			
			
			return (

				<DriverRouteCards userName={item.Fullname} userdropff={item.dropoff} ridePrice={item.RidePrice} userPic={item.userPic} userPhone={item.userPhone} userSeat={UserSeat} userGender={userGender}  
				seatid={()=>{
					let seatCardid=item.key
					const db=getDatabase()
					remove(ref(db, `UserPosts/${item.userPhone}/${seatCardid}`))
						.then(() => {
							console.log("Data removed successfully");
						})
						.catch((error) => {
							console.error("Error removing data:", error);
						});
						remove(ref(db, `Seats/${item.userPhone}`))
							.then(() => {
								console.log("Data removed successfully");
								set(ref(db, `TripisEnd/${item.userPhone}`),{
									Driverid:DriverID2,
									UserPhone:item.userPhone,
									userName:item.Fullname,
									userPic:item.userPic,
									tripStatus:true,
									
								});
							})
							.catch((error) => {
								console.error("Error removing data:", error);
							});
					


				}} />
			);
		};
  return (
		<>
			<UserandDriverLocation />
			<View style={{ backgroundColor: "#2153CC", flex:1 }}>
				{dataExists ?(<FlatList
					data={tasksList}
					renderItem={renderTask}
					keyExtractor={(item) => item.key}
					
				/>):(
					<Text style={{textAlign:'center',color:"white",fontSize:28,fontWeight:'bold'}}>User not reserved seat</Text>

				)}
					

				
				
				
				
			</View>
		</>
	);
}

export default DriverRouteScreen