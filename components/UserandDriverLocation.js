import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView, { Polyline, MapViewDirections ,Marker,} from "react-native-maps";
import { point } from "@turf/helpers";
import destination from "@turf/destination";
import * as Location from "expo-location";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export class UserandDriverLocation extends React.Component {
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
		return (
			<View style={styles.container}>
				<MapView
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
							<>
								<Marker
									coordinate={{
										latitude: element.lat,
										longitude: element.lon,
									}}
									title={title}
									key={"id_" + element.id}
								/>
							</>
						);
					})}
					<Marker
						coordinate={{
							latitude: 33.6555,
							longitude: 73.1556,
						}}
					/>

					{/* <Polyline
						coordinate={{
							latitude: 33.6555,
							longitude: 73.1556,
						}}
						strokeWidth={6}
						strokeColor="#000"
					/> */}
				</MapView>
				<Text>Heloo</Text>
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
export default UserandDriverLocation

