import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { createChatBot } from "./Api";
import { InputField } from './components/InputField';
import ChatBubble from "./components/ChatBubble";
import ChatHistory from "./components/ChatHistory";
import { SafeAreaView  } from "react-native-safe-area-context";
import { ChatHistoryProvider, useChatHistory } from "./hooks/useChatHistory";


async function testBot(): Promise<void> {
  const bot1 = createChatBot(
    {
      id: "123",
      name: "chad",
      system_instruction: "you are a classic gigachad",
    },
  );
  console.log("bot created: ", bot1.name);

  const message: string = "hi chad how are you?";

  console.log("user message:", message);

  const replay = await bot1.sendMessage(message);

  console.log("bot replay: ", replay);
}
export default function App() {
  testBot();
  return (
    <ChatHistoryProvider>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <SafeAreaView>
              <ScrollView style={styles.scrollView}>
                <ChatHistory></ChatHistory>
              </ScrollView>
              <View style={styles.container}>
                <InputField/>
                <StatusBar style="auto" />
              </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
      </ChatHistoryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
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
