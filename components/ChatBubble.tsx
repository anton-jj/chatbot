import { View, Text, StyleSheet } from "react-native";
import { UIMessage } from "../hooks/useChatHistory";

type ChatBubbleProps = {
  message: UIMessage;
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  if (message.sender === "user") {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>{message.message}</Text>
          <View style={styles.rightArrow} />
          <View style={styles.rightArrowOverlap} />
        </View>
      </View>
    )

  } else if (message.sender === "ai") {
    return (
      <View style={styles.wrapperAi}>
        <View style={styles.containerAi}>
          <View style={styles.rightArrowAi} />
          <View style={styles.rightArrowOverlapAi} />
          <Text style={styles.textAi}>{message.message}</Text>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
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
    alignSelf: "flex-end"
  },
  text: {
    fontSize: 16,
    color: "#fff"
  },
  rightArrow: {
    position: "absolute",
    backgroundColor: "#C68A9E",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10
  },
  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20
  },


  wrapperAi: {
    flex: 1,
    backgroundColor: "#fff",
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
    alignSelf: "flex-start"
  },
  textAi: {
    fontSize: 16,
    color: "#fff"
  },
  rightArrowAi: {
    position: "absolute",
    backgroundColor: "#553671",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomRightRadius: 25,
    left: -10
  },
  rightArrowOverlapAi: {
    position: "absolute",
    backgroundColor: "#fff",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomRightRadius: 18,
    left: -20
  }
})
