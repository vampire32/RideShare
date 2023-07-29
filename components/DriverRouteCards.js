import React, { useState, useEffect } from "react";
import { Pressable, View, Text, Image, ScrollView } from "react-native";
import UserandDriverLocation from "./UserandDriverLocation";
import { Card } from "react-native-paper";
import user from "../assets/images/avatar2.jpeg";

const DriverRouteCards = ({
	userName,
	userPic,
	userdropff,
	ridePrice,
	userPhone,
	userSeat,
	seatid,
}) => {
	return (
		<Pressable>
			<ScrollView>
				<Text
					style={{
						fontSize: 20,
						textAlign: "center",
						color: "white",
						marginTop: 5,
						marginBottom: 10,
					}}
				>
					Ride Details
				</Text>
				<Card>
					<Card.Content>
						<View
							style={{ flexDirection: "row", justifyContent: "space-between" }}
						>
							<Image
								source={{ uri: userPic }}
								style={{ width: 35, height: 35, borderRadius: 20 }}
							/>
							<Text
								style={{
									textAlign: "center",
									fontSize: 20,
									fontWeight: "bold",
								}}
							>
								{userName}
							</Text>
							<Text></Text>
						</View>
						<View
							style={{
								flexDirection: "column",
								justifyContent: "space-evenly",
							}}
						>
							<Text numberOfLines={1} style={{ fontSize: 15 }}>
								<Text style={{ fontWeight: "bold" }}>Dropoff:</Text>
								{userdropff}
							</Text>
							<Text style={{ fontSize: 15 }}>
								<Text style={{ fontWeight: "bold" }}>Phone Number:</Text>
								{userPhone}
							</Text>
							<Text style={{ fontSize: 15 }}>
								<Text style={{ fontWeight: "bold" }}>Seat Number:</Text>
								{userSeat}
							</Text>

							<Text style={{ fontSize: 15 }}>
								<Text style={{ fontWeight: "bold" }}>Ride Fare:</Text>
								{ridePrice}
							</Text>
						</View>
						<Pressable onPress={seatid}>
							<Text
								style={{
									backgroundColor: "red",
									textAlign: "center",
									padding: 10,
									marginTop: 10,
									borderRadius: 20,
									color: "white",
									fontWeight: "bold",
								}}
							>
								End Trip
							</Text>
						</Pressable>
					</Card.Content>
				</Card>
			</ScrollView>
		</Pressable>
	);
};

export default DriverRouteCards;
