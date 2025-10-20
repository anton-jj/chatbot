import { View, Text, Pressable, StyleSheet, Switch } from "react-native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Bot, createChatBot } from "../Api";
import React, { useEffect } from "react";
import { useTheme } from "../hooks/themeContext";
import { useThemeHeader } from "../hooks/useThemeHeader";

type navigationProp = NativeStackNavigationProp<RootStackParamList, "Start">;

const bots = {
  chad: createChatBot({
    id: "123",
    name: "chad",
    system_instruction: "you are a classic gigachad",
  }),
  linus: createChatBot({
    id: "321",
    name: "linus",
    system_instruction: "you are linus the creator of the linux kernel",
  }),
};

export default function Startpage() {
  const navigation = useNavigation<navigationProp>();
  const { theme, toggleTheme } = useTheme();

  const themeTextStyle =
    theme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    theme === "light" ? styles.lightContainer : styles.darkContainer;

  useThemeHeader();
  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View style={styles.switchHolder}>
        <Switch value={theme === "dark"} onValueChange={toggleTheme} />
      </View>
      <Text style={styles.title}>Startzidan</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ChatScreen", { bot: bots.chad })}
      >
        <Text style={styles.buttonText}>Chatta med Chad</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ChatScreen", { bot: bots.linus })}
      >
        <Text style={styles.buttonText}>Chatta med Linus</Text>
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
