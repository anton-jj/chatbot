import { View, Text, StyleSheet } from "react-native";
import { useChatHistory } from "../hooks/useChatHistory";
import ChatBubble from "./ChatBubble";

type ChatHistoryProps = { }

export default function ChatHistory({} : ChatHistoryProps) {
    const {messages} = useChatHistory();
    return (
        <>{messages.map((m , i) => <ChatBubble message={m} key={i}/>)}</>
    )
}