import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Appearance,
  Switch,
} from "react-native";
import { UIMessage } from "../hooks/useChatHistory";
import { useTheme } from "../hooks/themeContext";

type ChatBubbleProps = {
  message: UIMessage;
};

export default function ChatBubble({ message }: ChatBubbleProps) {
  const colorScheme = useColorScheme();
  const { theme, toggleTheme } = useTheme();

  const overlapBackgroundStyle =
    theme === "light"
      ? styles.lightScreenBackground
      : styles.darkScreenBackground;
  const themeTextStyle =
    theme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const userBubbleStyle =
    theme === "light" ? styles.lightUserBubble : styles.darkUserBubble;
  const aiBubbleStyle =
    theme === "light" ? styles.lightAiBubble : styles.darkAiBubble;

  if (message.sender === "user") {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.container, userBubbleStyle]}>
          <Text style={[styles.text, themeTextStyle]}>{message.message}</Text>
          <View style={[styles.rightArrow, userBubbleStyle]} />
          <View style={[styles.rightArrowOverlap, overlapBackgroundStyle]} />
        </View>
      </View>
    );
  } else if (message.sender === "ai") {
    return (
      <View style={styles.wrapperAi}>
        <View style={[styles.containerAi, aiBubbleStyle]}>
          <View style={[styles.rightArrowAi, aiBubbleStyle]} />
          <View style={[styles.rightArrowOverlapAi, overlapBackgroundStyle]} />
          <Text style={[styles.textAi, themeTextStyle]}>{message.message}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#C68A9E",
    padding: 10,
    marginLeft: "45%",
    marginRight: "5%",
    borderRadius: 20,
    marginTop: 5,
    maxWidth: "50%",
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#C68A9E",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },
  rightArrowOverlap: {
    position: "absolute",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
  darkThemeOverlap: {
    backgroundColor: "#222",
  },
  lightThemeOverlap: {
    backgroundColor: "#fff",
  },
  wrapperAi: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerAi: {
    backgroundColor: "#553671",
    padding: 10,
    marginLeft: "5%",
    marginRight: "45%",
    borderRadius: 20,
    marginTop: 5,
    maxWidth: "50%",
    alignSelf: "flex-start",
  },
  textAi: {
    fontSize: 16,
    color: "#fff",
  },
  rightArrowAi: {
    position: "absolute",
    backgroundColor: "#553671",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10,
  },
  rightArrowOverlapAi: {
    position: "absolute",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20,
  },
  lightUserBubble: {
    backgroundColor: "#C68A9E",
  },
  darkUserBubble: {
    backgroundColor: "#4B2C3D",
  },
  lightAiBubble: {
    backgroundColor: "#553671",
  },
  darkAiBubble: {
    backgroundColor: "#311B3B",
  },
  lightScreenBackground: {
    backgroundColor: "#fff",
  },
  darkScreenBackground: {
    backgroundColor: "#222",
  },
});
