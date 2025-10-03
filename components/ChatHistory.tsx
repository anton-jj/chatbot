import { useChatHistory } from "../hooks/useChatHistory";
import ChatBubble from "./ChatBubble";

type ChatHistoryProps = {};

export function ChatHistory({ }: ChatHistoryProps) {
  const { messages } = useChatHistory();
  return <>{messages.map((m, i) => <ChatBubble message={m} key={i} />)}</>;
}

