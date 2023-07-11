import React, { useEffect } from "react";
import {
	
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
} from "react-native";
import BG from '../assets/logo.png'

import * as SecureStore from "expo-secure-store";


const Splash =(props) => {
  
  useEffect(() => {
    setTimeout(() => {
		
			let result =  SecureStore.getItemAsync("Phone");
			if (result!=null){
				props.navigation.replace("Dashboard");

			}
			else{
				props.navigation.navigate("Login");

			}
		
      
	//   
    }, 3000);
    
  
    
  }, [])
  

  
    return (
			<View style={styles.container}>
				<View style={{ flexDirection: "column", alignItems: "center" }}>
					<Text style={styles.text}>Welcome to RideShare</Text>
					<Image source={BG} style={{ width: 300, height: 200 }} />
					<Text style={styles.text2}>Share with Love !</Text>
				</View>
			</View>
		);
  }
  const android = Dimensions.get("window");
  const styles = StyleSheet.create({
		container: {
			flex: 1,
			with: android.width * 1.2,
			height: android.height * 1.2,
			backgroundColor: "#2153CC",
			flexDirection: "column",
			justifyContent: "center",
		},
		// image: {
		// 	flex: 1,

		// 	// backgroundColor: "#1F4690",
		// },
		text: {
			color: "white",
			fontSize: 32,

			fontWeight: "bold",
			textAlign: "center",
		},
		text2: {
			color: "white",
			fontSize: 22,

			
			textAlign: "center",
		},
		bg: {
			width: android.width,
		},
	});


export default Splash;