import React, { useEffect } from "react";
import {
	
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
} from "react-native";
import BG from '../assets/logo.png'

import BG2 from '../assets/images/RideShare-removebg-preview.png' 
import { LinearGradient } from "expo-linear-gradient";


const Splash =(props) => {
  
  useEffect(() => {
    setTimeout(() => {
    //   props.navigation.navigate("Login")
	  props.navigation.replace("ThankYouRIde");
    }, 3000);
    
  
    
  }, [])
  

  
    return (
			<View style={styles.container}>
				
					<View style={styles.image}>
						<View style={{ flexDirection: "column", alignItems: "center" }}>
							<Text style={styles.text}>Welcome to</Text>
							<Image source={BG} style={{ width: 350, height: 350 }} />
							{/* <Text style={styles.text}>Welcome To</Text>
							<Text style={styles.text}>Ride Sahre</Text> */}
						</View>
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
			backgroundColor: "#043F96",
		},
		image: {
			flex: 1,
			flexDirection: "column",
			justifyContent: "center",
			// backgroundColor: "#1F4690",
			justifyContent: "center",
		},
		text: {
			color: "white",
			fontSize: 32,

			fontWeight: "bold",
			textAlign: "center",
		},
		bg: {
			width: android.width,
		},
	});


export default Splash;