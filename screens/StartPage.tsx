import { View, Text, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Bot, createChatBot } from "../Api";

type navigationProp = NativeStackNavigationProp<RootStackParamList, "Start">;

const bots = {
		 chad : createChatBot(
			{
				id: "123",
				name: "chad",
				system_instruction: "you are a classic gigachad",
			},
		),
		linus :  createChatBot(
			{
				id: "321",
				name: "linus",
				system_instruction: "you are linus the creator of the linux kernel",
			},
		),
};

export default function Startpage() {

	const navigation = useNavigation<navigationProp>();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Startzidan</Text>
			<Pressable style={styles.button}
				onPress={() => navigation.navigate("ChatScreen", { bot : bots.chad})}>
				<Text style={styles.buttonText}>Chatta med Chad</Text>
			</Pressable>
			<Pressable style={styles.button}
				onPress={() => navigation.navigate("ChatScreen", { bot : bots.linus})}>
				<Text style={styles.buttonText}>Chatta med Linus</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		marginBottom: 30,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	button: {
		padding: 15,
		backgroundColor: '#007AFF',
		borderRadius: 8,
		marginBottom: 15,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: '600',
	},
});
