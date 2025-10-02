import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createChatBot } from "./Api.tsx";
import { InputField } from './components/InputField';

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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <InputField/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
