import { ChatScreen} from "./screens/ChatScreen";
import { ChatHistoryProvider } from "./hooks/useChatHistory";
import { NavigationContainer } from "@react-navigation/native";
import Startpage from "./screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bot } from "./Api";
import { router } from "expo-router";

export type RootStackParamList = {
	Start: undefined;
	ChatScreen: { bot: Bot };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
    <ChatHistoryProvider>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Start" component={Startpage} options={{title: 'AI Chatbot'}} />
				<Stack.Screen name="ChatScreen" component={ChatScreen} options={{title: 'Chad'}}/>
			</Stack.Navigator>
		</NavigationContainer>


		</ChatHistoryProvider>
	);
}

