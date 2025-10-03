import { ChatScreen } from "./ChatScreen";
import { ChatHistoryProvider } from "./hooks/useChatHistory";
export default function App() {
	return (
		<ChatHistoryProvider>
			<ChatScreen />
		</ChatHistoryProvider>
	);
}

