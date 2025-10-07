import  ChatScreen from "./screens/ChatScreen";
import { ChatHistoryProvider } from "./hooks/useChatHistory";
import { NavigationContainer } from "@react-navigation/native";
import Startpage  from "./screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export type RootStackParamList = {
	Start: undefined;
	ChatScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
	
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Start" component={Startpage} />
				<Stack.Screen name="ChatScreen" component={ChatScreen} />
			</Stack.Navigator>
		</NavigationContainer>

	);
}

