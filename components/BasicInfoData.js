import firebase from "firebase/compat/app";
import { getDatabase,ref, set } from "firebase/database";
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
 const dataSubmit=async(Fullname,Email,DOB,Image,result)=>{
    	// let result = await SecureStore.getItemAsync("PhoneNum");
		// setphoneNumber(result);
		// console.log(result)
			const db = getDatabase();
			
			set(ref(db, "Drivers/" + `${result}/` + "BasicInfo/"), {
				Fullname: Fullname,
				Email: Email,
				DOB: DOB,
				Profilepic: Image,
			});

 }
 export default dataSubmit