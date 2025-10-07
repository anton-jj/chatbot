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


export default function ChatScreen() {
  const { setBot } = useChatHistory();

  useEffect(() => {
    const bot1 = createChatBot(
      {
        id: "123",
        name: "chad",
        system_instruction: "you are a classic gigachad",
      },
    );
    setBot(bot1);
    console.log("bot init: ", bot1.name)
  }, []);

  return (

    <ChatHistoryProvider>

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <ChatHistory></ChatHistory>
        </ScrollView>
        <View style={styles.container}>
          <InputField />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>

    </ChatHistoryProvider>
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
