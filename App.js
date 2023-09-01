import React,{useCallback} from "react";
import { AppRegistry, Platform,View,StyleSheet } from "react-native";

import SplashScreen from "./components/SplashScreen";
import Login from "./components/LoginScreen";
import "react-native-gesture-handler";

import Dashboard from './components/Dashboard'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
import Verification from './components/Verification'
import UserRegistration from "./components/UserRegistration";



import DrawerNavigator from "./components/DrawNavigator";



const App =()=>{
	
	return (
		
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		
	);
}


export default App