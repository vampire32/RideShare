import firebase from "firebase/compat/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

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
const dataSubmitDriverCNIC = async (CnicNumber, Image2, Image, result) => {
	const db = getDatabase();

	set(ref(db, "Drivers/" + `${result}/` + "CINCinfo/"), {
		DriverCnic: CnicNumber,
		frottimg: Image,
		backimg: Image2,
	});
};
 export default dataSubmitDriverCNIC