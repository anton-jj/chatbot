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
  const { palette } = useTheme();

  const bubbleStyle = {
    backgroundColor:
      message.sender === "user" ? palette.surface : palette.surfaceAlt,
  };

  const textStyle = { color: palette.textPrimary };
  const overlapStyle = { backgroundColor: palette.background };
  if (message.sender === "user") {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.container, bubbleStyle]}>
          <Text style={[styles.text, textStyle]}>{message.message}</Text>
          <View style={[styles.rightArrow, bubbleStyle]} />
          <View style={[styles.rightArrowOverlap, overlapStyle]} />
        </View>
      </View>
    );
  } else if (message.sender === "ai") {
    return (
      <View style={styles.wrapperAi}>
        <View style={[styles.containerAi, bubbleStyle]}>
          <View style={[styles.rightArrowAi, bubbleStyle]} />
          <View style={[styles.rightArrowOverlapAi, overlapStyle]} />
          <Text style={[styles.textAi, textStyle]}>{message.message}</Text>
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
  },
  rightArrow: {
    position: "absolute",
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
  wrapperAi: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerAi: {
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
  },
  rightArrowAi: {
    position: "absolute",
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
});
