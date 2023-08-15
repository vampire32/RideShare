import React from "react";
import { View, Text, AppRegistry, NativeModules } from "react-native";
import {
	createDrawerNavigator,
	NavigationContainer,
} from "@react-navigation/drawer";

import CustomDrawer from "./CustomDrawer";
import HomeNavigator from './HomeNavigator'
import { MainStackNavigator } from "./MainStackNavigator";
import Profile from "./Setting";
import DigitalWallet from "./DigitalWallet";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import DriversCards from "./DriversCards";



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



const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
	<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		<Text>{props.name}</Text>
	</View>
);

const clear= async()=>{
	
	const navigation = useNavigation();
	await SecureStore.deleteItemAsync("PhoneNum")
	navigation.navigate("Login")

}
const startReload = () => RNRestart.Restart(true);
const DrawerNavigator = (props) => {
	const navigation = useNavigation();
	return (
		// <NavigationContainer>
		<Drawer.Navigator
			useLegacyImplementation
			drawerContent={(props) => <CustomDrawer {...props} />}
		>
			<Drawer.Screen
				name="Home"
				options={{ headerShown: false }}
				component={MainStackNavigator}
			/>
			<Drawer.Screen
				name="DigitalWallet"
				options={{ headerShown: true }}
				component={DigitalWallet}
			/>

			<Drawer.Screen
				name="Setting"
				options={{ headerShown: true }}
				component={Profile}
			></Drawer.Screen>

			<Drawer.Screen name="Sign Out">
				{() => {
					clear()


				}}
			</Drawer.Screen>
		</Drawer.Navigator>
		// </NavigationContainer>
	);
};

export default DrawerNavigator;
