import React, { useState, useCallback, useEffect } from "react";
import { View,Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Icon from "react-native-vector-icons/MaterialIcons";

export function ChatScreen() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Hello developer",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);

	return (
		<>
			<View style={{ backgroundColor: "#253CCC", marginTop: 40, padding: 10,flexDirection:"row",alignItems:"center", borderBottomStartRadius:40,borderBottomEndRadius:40 }}>
				<Text style={{marginLeft:"40%", fontSize: 18, color: "white" }}>
					Hasan
				</Text>
				<Icon
					name="call"
					size={15}
					color="#2153CC"
					style={{
						marginTop: 12,
						backgroundColor: "#fff",
						padding: 15,
						borderRadius: 90,
						marginLeft: "33%",
						
					}}
				/>
			</View>
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: 1,
				}}
			/>
		</>
	);
}
export default ChatScreen