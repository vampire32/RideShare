import React from "react";

import SplashScreen from "./SplashScreen";
import Login from "./LoginScreen";
import "react-native-gesture-handler";
import Dashboard from "./Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Verification from "./Verification";
import UserRegistration from "./UserRegistration";
import FindingDrivers from "./FindingDrivers";
import SelectSeat from "./SelectSeat";
import RouteScreen from "./RouteScreen";
import SuccefulPage from "./SuccefulPage";
import Profile from "./Setting";
import DriverReg from "./DriverReg";
import BasicInfo from "./BasicInfo";
import VechlieInfo from "./VechlieInfo.js";
import IdConfrim from "./IdConfrim";
import DriverLicense from "./DriverLicense";
import CNIC from "./CNIC";
import DriverDashboard from "./DriverDashboard";
import DigitalWallet from "./DigitalWallet";
import FindingCustomers from "./FindingCustomers";
import CheckingSeats from "./CheckingSeats";
import CustomerRoute from "./CustomerRoute";
import ThankYouRIde from "./ThankYouRIde";
import ChatScreen from "./ChatScreen";
import DriversCards from "./DriversCards";
import DriverRouteScreen from "./DriverRouteScreen";
import CreatingPost from "./CreatingPost";
import DriverPosts from "./DriverPosts";
import DriverProfile from "./DriverProfile";
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="SplashScreen">
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
				options={{
					headerShown: true,
					headerBackVisible: false,
					title: "Create Account",
					headerTitleAlign: "center",
					headerTintColor: "#2153CC",
				}}
			/>
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="FindingDrivers"
				component={FindingDrivers}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="SelectSeat"
				component={SelectSeat}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="RouteScreen"
				component={RouteScreen}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="SuccefulPage"
				component={SuccefulPage}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="DriverReg"
				component={DriverReg}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="BasicInfo"
				component={BasicInfo}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="VechlieInfo"
				component={VechlieInfo}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="IdConfrim"
				component={IdConfrim}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DriverLicense"
				component={DriverLicense}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CNIC"
				component={CNIC}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DriverDashboard"
				component={DriverDashboard}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DigitalWallet"
				component={DigitalWallet}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="FindingCustomers"
				component={FindingCustomers}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CheckingSeats"
				component={CheckingSeats}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="CustomerRoute"
				component={CustomerRoute}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ThankYouRIde"
				component={ThankYouRIde}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="ChatScreen"
				component={ChatScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DriverCards"
				component={DriversCards}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DriverRouteScreen"
				component={DriverRouteScreen}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="DriverProfile"
				component={DriverProfile}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="CreatingPost"
				component={CreatingPost}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="DriverPost"
				component={DriverPosts}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export { MainStackNavigator };
