import firebase from "firebase/compat/app";
import { getDatabase,onValue,ref, set } from "firebase/database";

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
 const dataSubmitUser=async(Fullname,Email,DOB,Image,result)=>{
 
			const db = getDatabase();
			
			set(ref(db, "users/" + `${result}/`), {
				Fullname: Fullname,
				Email: Email,
				Gender: DOB,
				Phone:result,
				Profilepic:Image,
			});

 }
 const dataValidationUser=(phone)=>{
    let value;
    const db=getDatabase()
    onValue(ref(db,`users/${phone}`),(snapshot)=>{
        const data=snapshot.exists()
        value=data
    })
    return value

 }
 export  {dataSubmitUser,dataValidationUser}