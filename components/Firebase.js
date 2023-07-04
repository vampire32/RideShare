import firebase from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyApXe3W_5MsAs4kbP6PLVDNQSzoMSEiS1k",
	authDomain: "rideshare-e63db.firebaseapp.com",
	projectId: "rideshare-e63db",
	storageBucket: "rideshare-e63db.appspot.com",
	messagingSenderId: "593723067966",
	appId: "1:593723067966:web:8e82734b96f6265c544b6f",
	measurementId: "G-L1KLQTD7C1",
};

const app=firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);

export default firebase;
