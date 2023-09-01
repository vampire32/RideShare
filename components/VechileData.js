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
const dataSubmitDriverVechile = async (Name, Image2, Image,Image3, result,Plate) => {
	const db = getDatabase();

	set(ref(db, "Drivers/" + `${result}/` + "VechileInfo/"), {
		Vechilename: Name,
			Plate: Plate,
			picofViechile: Image,
			certfiFront: Image2,
			certfiback: Image3,
	});
};
export default dataSubmitDriverVechile;
