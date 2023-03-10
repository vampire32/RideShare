import React from "react";
import { View, Text } from "react-native";
import {
	createDrawerNavigator,
	NavigationContainer,
} from "@react-navigation/drawer";

import CustomDrawer from "./CustomDrawer";
import HomeNavigator from './HomeNavigator'
import { MainStackNavigator } from "./MainStackNavigator";
import Profile from "./Setting";
import DigitalWallet from "./DigitalWallet";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
	<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		<Text>{props.name}</Text>
	</View>
);


const DrawerNavigator = () => {
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

			<Drawer.Screen name="Help">
				{() => <DummyScreen name="Help" />}
			</Drawer.Screen>
		</Drawer.Navigator>
		// </NavigationContainer>
	);
};

export default DrawerNavigator;
