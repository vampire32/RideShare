import React, { useCallback, useRef, useMemo ,useState,useEffect} from "react";
import { View, Text, Dimensions, StyleSheet, Pressable,Modal, TextInput } from "react-native";

import { BottomSheet } from "react-native-btr";
import firebase from "firebase/compat/app";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import * as SecureStore from "expo-secure-store";

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
const DigitalWallet = () => {
	 const [visible, setVisible] = useState(false);
     const [ModelVisible, setModelVisible] = useState(false)
     const [ModelVisible2, setModelVisible2] = useState(false);
	 const [AccountNumber, setAccountNumber] = useState("")
	 const [Email, setEmail] = useState("")
	 const [Amount, setAmount] = useState()
	 const [DBAmount, setDBAmount] = useState()
	 const [userName, setuserName] = useState("")
	 const [userPhone, setuserPhone] = useState("")
	 const [userPic, setuserPic] = useState("")
	 useEffect(() => {
		const fetch=async()=>{
			let result = await SecureStore.getItemAsync("PhoneNum");
			 const db = getDatabase();
			 onValue(ref(db,`users/${result}/`),(querSnapShot)=>{
				let data=querSnapShot.val()
				setuserName(data.Fullname)
				setuserPhone(data.Phone)
				setuserPic(data.Profilepic)
			 })
			 onValue(ref(db, `DigitalWallet/${result}/`), (querSnapShot) => {
				 let data=querSnapShot.val()||{}
				 setDBAmount(data.Amount)
				 console.log(data)
					
				});

			

		}
		fetch()
	   
	 }, [])
	 
	  const handleChangeAccountNum = (Number) => {
			setAccountNumber(Number);
		};
		 const handleChangeEmail = (email) => {
				setEmail(email);
			};
			 const handleChangeAmount = (amount) => {
					setAmount(amount);
				};
let fixAmount=parseFloat(Amount)
 let intAmount=parseFloat(DBAmount+fixAmount)
 let out=parseFloat(DBAmount-fixAmount)
		const toggleBottomNavigationView = () => {
			
			setVisible(!visible);
		};
	const Submit=async()=>{
		let result = await SecureStore.getItemAsync("PhoneNum");

		const db = getDatabase();
		push(ref(db, "/WalletLogs/"+`${result}/`), {
			userName: userName,
			userPhone: userPhone,
			userPhone: userPhone,
			AccountNumber: AccountNumber,
			Email: Email,
			TotalAmount: intAmount,
			AddAmount:Amount,
		});
		set(ref(db,"/DigitalWallet/"+`${result}/`),{
			AccountNumber:AccountNumber,
			Email:Email,
			Amount:intAmount,
		})
	}
		const Submit2 = async () => {
			let result = await SecureStore.getItemAsync("PhoneNum");

			const db = getDatabase();
			push(ref(db, "/WalletLogs/" + `${result}/`), {
				userName: userName,
				userPhone: userPhone,
				userPhone: userPhone,
				AccountNumber: AccountNumber,
				Email: Email,
				TotalAmount: out,
				CashOutAmount: Amount,
			});
			set(ref(db, "/DigitalWallet/" + `${result}/`), {
				AccountNumber: AccountNumber,
				Email: Email,
				Amount: out,
			});
		};
	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: "#FFF",
					paddingVertical: 20,
					borderRadius: 20,
					elevation: 10,
					marginTop: 20,
				}}
			>
				<Text
					style={{
						textAlign: "center",
						fontSize: 24,
						fontWeight: "bold",
						marginTop: 10,
					}}
				>
					Your Current balance{" "}
				</Text>
				<Text
					style={{
						textAlign: "center",
						marginTop: 20,
						fontSize: 20,
						fontWeight: "bold",
						color: "#2153CC",
					}}
				>
					Amount :{DBAmount}
				</Text>
			</View>
			<View style={{ marginTop: 30, marginLeft: 5 }}>
				<Text style={{ fontSize: 18, fontWeight: "bold" }}>TopUp</Text>
				<Text style={{ marginTop: 3 }}>Your Wallet Including:</Text>
				<Text style={{ marginLeft: 5 }}>.TopUp using EasyPaisa Account</Text>
				<Text style={{ marginLeft: 5 }}>.TopUp using JazzCash Account</Text>
				<Text style={{ fontWeight: "bold", marginTop: 5 }}>
					Digital Wallet Amount Use only For RideShare Fares,It cannot be
					reserved back to your account
				</Text>
			</View>
			<Pressable onPress={toggleBottomNavigationView}>
				<Text style={styles.button}>TopUp</Text>
			</Pressable>
			<Pressable onPress={()=>{
				setModelVisible2(true)
			}}>
				<Text style={styles.button}>Withdrawal</Text>
			</Pressable>
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={ModelVisible}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={{ fontSize: 22, fontWeight: "bold" }}>
								EasyPaisa
							</Text>
							<Text style={{ marginTop: 5, fontWeight: "500" }}>
								Please Enter a valid EasyPaisa Mobile number and email and top
								up the amount
							</Text>
							<Text style={{ marginTop: 20, fontSize: 15, fontWeight: "bold" }}>
								Account Number
							</Text>
							<TextInput
								style={{
									borderRadius: 10,
									width: android.width / 1.2,
									paddingLeft: 10,
									backgroundColor: "#FFFDD0",
									marginTop: 10,
									paddingVertical: 10,
									elevation: 5,
								}}
								placeholder="Account number"
								keyboardType="number-pad"
								value={AccountNumber}
								onChangeText={handleChangeAccountNum}
							/>
							<Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
								Amount
							</Text>
							<TextInput
								style={{
									borderRadius: 10,
									width: android.width / 1.2,
									paddingLeft: 10,
									backgroundColor: "#FFFDD0",
									marginTop: 10,
									paddingVertical: 10,
									elevation: 5,
								}}
								placeholder="500"
								keyboardType="number-pad"
								value={Amount}
								onChangeText={handleChangeAmount}
							/>
							<Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
								Email
							</Text>
							<TextInput
								style={{
									borderRadius: 10,
									width: android.width / 1.2,
									paddingLeft: 10,
									backgroundColor: "#FFFDD0",
									marginTop: 10,
									paddingVertical: 10,
									elevation: 5,
								}}
								placeholder="500"
								value={Email}
								onChangeText={handleChangeEmail}
							/>
							<View style={{ flexDirection: "row", marginTop: 30 }}>
								<Pressable
									onPress={() => {
										Submit();
										setModelVisible(false);
									}}
								>
									<Text
										style={{
											borderColor: "#2153CC",
											borderRadius: 40,
											borderWidth: 1,
											paddingBottom: 10,
											paddingLeft: 20,
											paddingRight: 20,
											paddingTop: 10,
										}}
									>
										OK
									</Text>
								</Pressable>
								<Pressable
									onPress={() => {
										setModelVisible(false);
									}}
								>
									<Text
										style={{
											borderColor: "#2153CC",
											borderRadius: 40,
											borderWidth: 1,
											paddingBottom: 10,
											paddingLeft: 20,
											paddingRight: 20,
											paddingTop: 10,
											marginLeft: 30,
										}}
									>
										Cancel
									</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</Modal>
			</View>
			<View style={styles.centeredView}>
				<Modal
					animationType="slide"
					transparent={true}
					visible={ModelVisible2}
					onRequestClose={() => {
						alert("Modal has been closed.");
					}}
				>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={{ fontSize: 22, fontWeight: "bold" }}>
								EasyPaisa
							</Text>
							<Text style={{ marginTop: 5, fontWeight: "500" }}>
								Please Enter a valid EasyPaisa Mobile number and email and top
								up the amount
							</Text>
							<Text style={{ marginTop: 20, fontSize: 15, fontWeight: "bold" }}>
								Account Number
							</Text>
							<TextInput
								style={{
									borderRadius: 10,
									width: android.width / 1.2,
									paddingLeft: 10,
									backgroundColor: "#FFFDD0",
									marginTop: 10,
									paddingVertical: 10,
									elevation: 5,
								}}
								placeholder="Account number"
								keyboardType="number-pad"
								value={AccountNumber}
								onChangeText={handleChangeAccountNum}
							/>
							<Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
								Amount
							</Text>
							<TextInput
								style={{
									borderRadius: 10,
									width: android.width / 1.2,
									paddingLeft: 10,
									backgroundColor: "#FFFDD0",
									marginTop: 10,
									paddingVertical: 10,
									elevation: 5,
								}}
								placeholder="500"
								keyboardType="number-pad"
								value={Amount}
								onChangeText={handleChangeAmount}
							/>
							<Text style={{ marginTop: 10, fontSize: 15, fontWeight: "bold" }}>
								Email
							</Text>
							<TextInput
								style={{
									borderRadius: 10,
									width: android.width / 1.2,
									paddingLeft: 10,
									backgroundColor: "#FFFDD0",
									marginTop: 10,
									paddingVertical: 10,
									elevation: 5,
								}}
								placeholder="500"
								value={Email}
								onChangeText={handleChangeEmail}
							/>
							<View style={{ flexDirection: "row", marginTop: 30 }}>
								<Pressable
									onPress={() => {
										Submit2();
										setModelVisible2(false);
									}}
								>
									<Text
										style={{
											borderColor: "#2153CC",
											borderRadius: 40,
											borderWidth: 1,
											paddingBottom: 10,
											paddingLeft: 20,
											paddingRight: 20,
											paddingTop: 10,
										}}
									>
										OK
									</Text>
								</Pressable>
								<Pressable
									onPress={() => {
										setModelVisible2(false);
									}}
								>
									<Text
										style={{
											borderColor: "#2153CC",
											borderRadius: 40,
											borderWidth: 1,
											paddingBottom: 10,
											paddingLeft: 20,
											paddingRight: 20,
											paddingTop: 10,
											marginLeft: 30,
										}}
									>
										Cancel
									</Text>
								</Pressable>
							</View>
						</View>
					</View>
				</Modal>
			</View>

			<BottomSheet
				visible={visible}
				//setting the visibility state of the bottom shee
				onBackButtonPress={toggleBottomNavigationView}
				//Toggling the visibility state on the click of the back botton
				onBackdropPress={toggleBottomNavigationView}
				//Toggling the visibility state on the clicking out side of the sheet
			>
				<View style={styles.bottomNavigationView}>
					<Pressable onPress={() => setModelVisible(true)}>
						<Text
							style={{
								fontSize: 24,
								fontWeight: "bold",
								marginTop: 20,
								color: "#2153CC",
							}}
						>
							EasyPaisa
						</Text>
					</Pressable>
				</View>
			</BottomSheet>
		</View>
	);
};
const android = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: android.width,
		height: android.height,
		backgroundColor: "#fff",
	},
	bottomNavigationView: {
		backgroundColor: "#fff",
		width: "100%",
		height: 100,

		alignItems: "center",
	},
	Text: {
		color: "#ffff",
		fontSize: 28,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#2153CC",
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "#FFF",
		borderRadius: 20,
		padding: 35,
		
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
export default DigitalWallet;
