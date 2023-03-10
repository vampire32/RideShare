import React from "react";
import { AppRegistry, Platform } from "react-native";

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
		<>
			<NavigationContainer>
				<DrawerNavigator/>
				{/* <Stack.Navigator initialRouteName="SplashScreen">
					<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
					<Stack.Screen
						name="SplashScreen"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name="Verification"
						component={Verification}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="UserRegistration"
						component={UserRegistration}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Dashboard"
						component={Dashboard}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator> */}
			</NavigationContainer>
		</>
	);
}


export default App