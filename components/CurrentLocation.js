import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, {
	Polyline,
	
	Marker,
} from "react-native-maps";
import { point } from "@turf/helpers";
import destination from "@turf/destination";
import * as Location from "expo-location";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const GOOGLE_MAPS_APIKEY = "AIzaSyDpYM_2b7YZqKmsDv__NEYzkiwJHyWIVMw";
import MapViewDirections from "react-native-maps-directions";
import * as SecureStore from "expo-secure-store";
import * as LocationGeocoding from 'expo-location';
export default class MapVieww extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			elements: [],
			south: null,
			west: null,
			north: null,
			east: null,
			latitude: null,
			longitude: null,
			latitude2: null,
			longitude2: null,
			liveLongitude:null,
			livelatitude:null,
			show:false,
			show2:false,
			location:null,
			Address:null,
		};
	}
	
	async updateState(location) {
		this.setState({
			...this.state,
			latitude: await SecureStore.getItemAsync("lat"),
			longitude: await SecureStore.getItemAsync("long"),
			latitude2: await SecureStore.getItemAsync("lat2"),
			longitude2: await SecureStore.getItemAsync("long2"),
			
		});
	}

	async componentDidMount() {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== "granted") {
			return;
		}
		const subscription = Location.watchPositionAsync(
			{
				accuracy: Location.Accuracy.High,
				timeInterval: 1000, // Update every 1 second
			},
			async (newLocation) => {
				const addressResponse = await LocationGeocoding.reverseGeocodeAsync(
			newLocation.coords
		);
				
			  this.setState({
				...this.state,
				location:newLocation,
				Address:addressResponse[0],
				
			
			  })
			}
		);
		subscription;
		
	
		
		  
		let lat1 = parseFloat( await SecureStore.getItemAsync("lat3"));
		let long1 = parseFloat(await SecureStore.getItemAsync("long3"));
		let lat2 = parseFloat( await SecureStore.getItemAsync("lat2"));
		let long2 =parseFloat( await SecureStore.getItemAsync("long2"));
		console.log(this.state.latitude2);
		this.setState({
			...this.state,
			latitude: lat1,
			longitude: long1,
			latitude2: lat2,
			longitude2: long2,
		});
		console.log(this.state.latitude2)
		console.log(this.state.longitude2)
		if (this.state.latitude==null) {
			this.setState({
				show:false
			})
			
		} else {
			this.setState({
				show:true
			})
			
		}
		if (this.state.latitude2 == null) {
			this.setState({
				show2: false,
			});
		} else {
			this.setState({
				show2: true,
			});
		}


		try {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			this.updateState(location);
		} catch (error) {
			console.log(error);
		}
		// if (this.state.latitude2 != null && this.state.longitude2 != null) {
		// 	this.forceUpdate();
		// }
	}

	// setModalVisible(visible) {
	// 	this.setState({ modalVisible: visible });
	// }

	render() {
		
		
		
		
		
		return (
			<View style={styles.container}>
				<MapView
					style={styles.mapView}
					showsUserLocation
					initialRegion={{
						latitude: this.props.latitude,
						longitude: this.props.longtitude, // Initial map center longitude
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
					<Marker
						coordinate={{
							latitude: this.props.latitude,
							longitude: this.props.longtitude,
						}}
					/>
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "flex-end",
	},

	mapView: {
		...StyleSheet.absoluteFillObject,
	},

	buttonContainer: {
		flexDirection: "column",
		marginVertical: 20,
		backgroundColor: "transparent",
		alignItems: "flex-end",
	},

	button: {
		width: 300,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "#fcc200",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
		textAlign: "center",
		color: "#fff",
		fontSize: 18,
		fontWeight: "500",
		marginTop: 15,
	},
	button2: {
		width: 150,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "#fcc200",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
		textAlign: "center",
		color: "#fff",
		fontSize: 18,
		fontWeight: "500",
		marginTop: 15,
	},

	buttonItem: {
		textAlign: "center",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "#043F96",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
