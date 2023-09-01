import React,{Component} from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get, onValue, child } from "firebase/database";

import * as SecureStore from "expo-secure-store";

import MapViewDirections from "react-native-maps-directions";
import maekerpin from "../assets/Marker.png"
import DriverPin from '../assets/DriverPin.png'
const android = Dimensions.get("window");
import * as LocationGeocoding from "expo-location";


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

export class UserPickDropLocation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elements: [],
			south: null,
			west: null,
			north: null,
			east: null,
			latitude: 33.6555,
			longitude: 73.1556,
			markerData: [],
			location: null,
			Address: null,
			DriverLatitude:null,
			DriverLongitude:null,
		};
	}

	updateState(location) {
		this.setState({
			...this.state,
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});
	}

	async componentDidMount() {
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
						location: newLocation,
						Address: addressResponse[0],
					});
				}
			);
			subscription;
        let result=await SecureStore.getItemAsync("PhoneNum")
		const db = getDatabase();
		onValue(ref(db, `UserPosts/${result}`), (querySnapShot) => {
             let data = querySnapShot.val() || {};

							const list = [];

							for (let key in data ? data : []) {
								list.push({ key, ...data[key] });
							}
							this.setState({
								...this.state,
								markerData: list,
							});
			
		});
		let DriverPhone = await SecureStore.getItemAsync("DriverPhone2");

			let DriverID = await SecureStore.getItemAsync("DriverID");
			onValue(ref(db, `DriverPosts/${DriverPhone}/${DriverID}`), (querySnapShot) => {
				let data = querySnapShot.val();
				this.setState({
					...this.state,
					DriverLatitude: data.Latitude,
					DriverLongitude: data.longtitude,
				});
			

				
			});
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
	}

	render() {
        const data = this.state.markerData;
		
		return (
			<View style={styles.container}>
				{this.state.location && this.state.location.coords ? (
					<MapView
						style={styles.mapView}
						showsUserLocation
						initialRegion={{
							latitude: this.state.location.coords.latitude,
							longitude: this.state.location.coords.longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
					>
						{/* Render markers dynamically using map() */}
						{data.map((location) => (
							<>
								<Marker
									key={location.key}
									coordinate={{
										latitude: location.Latitude2,
										longitude: location.longtitude2,
									}}
									image={maekerpin}
								/>
								<Marker
									coordinate={{
										latitude: location.Latitude,
										longitude: location.longtitude,
									}}
									image={maekerpin}
								/>
								<Marker
									coordinate={{
										latitude: this.state.location.coords.latitude,
										longitude: this.state.location.coords.longitude,
									}}
								/>
								<Marker
									coordinate={{
										latitude: this.state.DriverLatitude,
										longitude: this.state.DriverLongitude,
									}}
									image={DriverPin}
								/>
								<MapViewDirections
									origin={{
										latitude: location.Latitude,
										longitude: location.longtitude,
									}}
									destination={{
										latitude: location.Latitude2,
										longitude: location.longtitude2,
									}}
									apikey="AIzaSyDpYM_2b7YZqKmsDv__NEYzkiwJHyWIVMw"
									strokeWidth={3}
									strokeColor="blue"
								/>
							</>
						))}
					</MapView>
				) : (
					<Text>Map Data is Loading</Text>
				)}
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
		width: 150,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		backgroundColor: "rgba(255,235,255,0.7)",
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 20,
	},

	buttonItem: {
		textAlign: "center",
	},
});
export default UserPickDropLocation;
