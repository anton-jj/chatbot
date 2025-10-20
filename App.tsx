import { ChatScreen } from "./screens/ChatScreen";
import { ChatHistoryProvider } from "./hooks/useChatHistory";
import { NavigationContainer } from "@react-navigation/native";
import Startpage from "./screens/StartPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Bot } from "./Api";
import { ThemeProvider } from "./hooks/themeContext";

export type RootStackParamList = {
  Start: undefined;
  ChatScreen: { bot: Bot };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <ChatHistoryProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={Startpage}
              options={{ title: "AI Chatbot" }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={({ route }) => ({ title: route.params.bot.name })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ChatHistoryProvider>
    </ThemeProvider>
  );
}
