import { View, Text, Pressable, StyleSheet, Switch } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Bot, createChatBot } from "../Api";
import { useTheme } from "../hooks/themeContext";
import { useThemeHeader } from "../hooks/useThemeHeader";

type navigationProp = NativeStackNavigationProp<RootStackParamList, "Start">;

const bots = {
  professor: createChatBot({
    id: "888",
    name: "Professor",
    system_instruction:
      "You are a wise university professor who explains things clearly and supports students with gentle encouragement.",
  }),
  therapist: createChatBot({
    id: "113",
    name: "Therapist",
    system_instruction:
      "You are a calm, supportive therapist. You listen, reflect, and ask thoughtful questions without judgment.",
  }),
  companion: createChatBot({
    id: "115",
    name: "Companion",
    system_instruction: `
    You are a supportive, friendly companion.
    You talk casually, listen well, and respond with empathy and interest.
  `,
  }),
};

export default function Startpage() {
  const navigation = useNavigation<navigationProp>();
  const { mode, palette, toggleTheme } = useTheme();

  const isLight: boolean = mode === "light";
  const backgroundStyle = { backgroundColor: palette.background };
  const textStyle = { color: palette.textPrimary };
  const surfaceStyle = { backgroundColor: palette.surface };

  useThemeHeader();
  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.switchHolder}>
        <Switch
          trackColor={{ false: palette.surface, true: palette.surface }}
          value={isLight}
          onValueChange={toggleTheme}
        />
      </View>
      <Text style={[styles.title, textStyle]}>Chatbots</Text>
      <Pressable
        style={[styles.button, surfaceStyle]}
        onPress={() =>
          navigation.navigate("ChatScreen", { bot: bots.therapist })
        }
      >
        <Text style={styles.buttonText}>Therapist</Text>
      </Pressable>
      <Pressable
        style={[styles.button, surfaceStyle]}
        onPress={() =>
          navigation.navigate("ChatScreen", { bot: bots.companion })
        }
      >
        <Text style={styles.buttonText}>Companion</Text>
      </Pressable>
      <Pressable
        style={[styles.button, surfaceStyle]}
        onPress={() =>
          navigation.navigate("ChatScreen", { bot: bots.professor })
        }
      >
        <Text style={styles.buttonText}>Professor</Text>
      </Pressable>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    flex: 1,
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#007AFF",
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  switchHolder: {
    flex: 1,
  },
  switchButton: {},
});
