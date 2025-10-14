import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  Appearance,
  Switch,
} from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createChatBot } from "../Api";
import { InputField } from "../components/InputField";
import { ChatHistory } from "../components/ChatHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { ChatHistoryProvider, useChatHistory } from "../hooks/useChatHistory";



export default function ChatScreen() {
  const { setBot } = useChatHistory();
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

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

    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, themeContainerStyle]}>
      <SafeAreaView>
        <ThemeProvider value={colorScheme=== 'dark' ? DarkTheme : DefaultTheme}>
          <ScrollView style={[styles.scrollView, themeContainerStyle]}>
            <ChatHistory></ChatHistory>
          </ScrollView>
          <View style={[styles.container, themeContainerStyle]}>
            <InputField />
            <StatusBar style="auto" />
          </View>
        </ThemeProvider>
      </SafeAreaView>
    </KeyboardAvoidingView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -1,
  },
    lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#222',
  },
    lightThemeText: {
    color: '#222',
  },
  darkThemeText: {
    color: '#fff',
  },
  keyboardAvoid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    marginBottom: 60,
    marginTop: 10,
  },
});
