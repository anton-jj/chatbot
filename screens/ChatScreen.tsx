import { StatusBar } from "expo-status-bar";
import {
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { createChatBot } from "../Api";
import { InputField } from "../components/InputField";
import { ChatHistory } from "../components/ChatHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { ChatHistoryProvider, useChatHistory } from "../hooks/useChatHistory";
import { Bot } from "../Api";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type ChatScreenRouteProp = RouteProp<RootStackParamList, "ChatScreen">

type Props = { route: ChatScreenRouteProp}

export function ChatScreen({route} : Props) {
	const { bot } = route.params
	const { setBot } = useChatHistory();

	useEffect(() => {
		setBot(bot);
	}, []);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
			style={styles.container}
		>
			<SafeAreaView>
				<ScrollView style={styles.scrollView} >
					<ChatHistory></ChatHistory>
				</ScrollView>
				<View style={styles.container}>
					<InputField />
					<StatusBar style="auto" />
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>

	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: -1,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},
	keyboardAvoid: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	scrollView: {
		backgroundColor: "#fff",
		width: "100%",
		height: "100%",
		marginBottom: 60,
		marginTop: 10,
	},
});
