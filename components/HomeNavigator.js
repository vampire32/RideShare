import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Dashboard from './Dashboard';


// const Stack = createStackNavigator();


const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				
			>
				<Stack.Screen name={"Dashboard"} component={Dashboard} />
			</Stack.Navigator>
		);
}

export default HomeNavigator