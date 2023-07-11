import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	TouchableHighlight,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { point } from "@turf/helpers";
import destination from "@turf/destination";
import * as Location from "expo-location";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MapViewDirections from "react-native-maps-directions";
const origin = { latitude: 33.65582, longitude: 73.155311 };
const destinationss = { latitude: 33.707566, longitude: 73.014857 };
const GOOGLE_MAPS_APIKEY = "AIzaSyDpYM_2b7YZqKmsDv__NEYzkiwJHyWIVMw";
export default class MapVieww extends React.Component {
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
			modalVisible: false,
		};
	}
	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}
	updateState(location) {
		this.setState({
			...this.state,
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});
	}

	async componentDidMount() {
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

	onRegionChangeComplete = (region) => {
		const center = point([region.longitude, region.latitude]);
		const verticalMeter = (111 * region.latitudeDelta) / 2;
		const horizontalMeter = (111 * region.longitudeDelta) / 2;
		const options = { units: "kilometers" };
		const south = destination(center, verticalMeter, 180, options);
		const west = destination(center, horizontalMeter, -90, options);
		const north = destination(center, verticalMeter, 0, options);
		const east = destination(center, horizontalMeter, 90, options);
		this.setState({
			south: south.geometry.coordinates[1],
			west: west.geometry.coordinates[0],
			north: north.geometry.coordinates[1],
			east: east.geometry.coordinates[0],
		});
	};

	fetchToilet = async () => {
		const south = this.state.south;
		const west = this.state.west;
		const north = this.state.north;
		const east = this.state.east;
		const body = `
            [out:json];
            (
                node
                [amenity=kindergarten]
                (${south},${west},${north},${east});

            );
            out;
            `;

		const options = {
			method: "POST",
			body: body,
		};

		try {
			const response = await fetch(
				"https://overpass-api.de/api/interpreter",
				options
			);
			const json = await response.json();
			this.setState({ elements: json.elements });
		} catch (e) {
			console.log(e);
		}
	};
	render() {
		return (
			<View style={styles.container}>
				{/* <MapView
					provider={PROVIDER_GOOGLE}
					onRegionChangeComplete={this.onRegionChangeComplete}
					style={styles.mapView}
					showsUserLocation
					initialRegion={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.02,
						longitudeDelta: 0.02,
					}}
				>
					{this.state.elements.map((element) => {
						let title = "current";
						if (element.tags["name"] !== undefined) {
							title = element.tags["name"];
						}
						return (
							<MapView.Marker
								coordinate={{
									latitude: element.lat,
									longitude: element.lon,
								}}
								title={title}
								key={"id_" + element.id}
							/>
						);
					})}
				</MapView> */}
				<MapView
					provider={PROVIDER_GOOGLE}
					onRegionChangeComplete={this.onRegionChangeComplete}
					style={styles.mapView}
					showsUserLocation={true}
					initialRegion={{
						latitude: this.state.latitude,
						longitude: this.state.longitude,
						latitudeDelta: 0.02,
						longitudeDelta: 0.02,
					}}
				>
					<MapViewDirections
						origin={origin}
						destination={destinationss}
						apikey={GOOGLE_MAPS_APIKEY}
						strokeWidth={3}
						strokeColor="hotpink"
					/>
				</MapView>
				<View style={styles.centeredView}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={this.state.modalVisible}
						onRequestClose={() => {
							alert("Modal has been closed.");
						}}
					>
						<View style={styles.centeredView}>
							<View style={styles.modalView}>
								<Text
									style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}
								>
									In Case Of Emergency!
								</Text>
								<TouchableHighlight>
									<Text style={styles.button}>Call The Police</Text>
								</TouchableHighlight>
								<TouchableHighlight>
									<Text style={styles.button}>Call The Our helpline</Text>
								</TouchableHighlight>
								<TouchableHighlight
									onPress={() => {
										this.setModalVisible(!this.state.modalVisible);
									}}
								>
									<Text style={styles.button2}>Close</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Modal>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => this.setModalVisible(true)}
						style={{
							backgroundColor: "white",
							padding: 15,
							borderRadius: 30,
							alignItems: "flex-end",
							justifyContent: "flex-end",
						}}
					>
						<MaterialIcons name="shield" size={20} color="#fcc200" />
					</TouchableOpacity>
				</View>
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
