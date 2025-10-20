import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Appearance,
  Switch,
} from "react-native";
import { InputField } from "../components/InputField";
import { ChatHistory } from "../components/ChatHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { ChatHistoryProvider, useChatHistory } from "../hooks/useChatHistory";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { useTheme } from "../hooks/themeContext";

type ChatScreenRouteProp = RouteProp<RootStackParamList, "ChatScreen">;

type Props = { route: ChatScreenRouteProp };

export function ChatScreen({ route }: Props) {
  const { bot } = route.params;
  const { setBot } = useChatHistory();
  const { theme, toggleTheme } = useTheme();

  const themeTextStyle =
    theme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    theme === "light" ? styles.lightContainer : styles.darkContainer;

  useEffect(() => {
    setBot(bot);
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      style={[styles.container, themeContainerStyle]}
    >
      <SafeAreaView>
        <ScrollView style={[styles.scrollView, themeContainerStyle]}>
          <ChatHistory />
        </ScrollView>
        <View style={[styles.container, themeContainerStyle]}>
          <InputField />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -1,
  },
  lightContainer: {
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#222",
  },
  lightThemeText: {
    color: "#222",
  },
  darkThemeText: {
    color: "#fff",
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
