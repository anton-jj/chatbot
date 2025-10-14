import React, { createContext, useContext, useEffect, useState } from "react"
import { Bot } from "../Api";

export type UIMessage = {
	sender: "user" | "ai",
	message: string
}
interface IChatContext {
	messages: Message[];
	addMessage: (msg: Message) => void;
	sendMessage: (text: string) => Promise<void>,
	setBot: (bot: Bot) => void;
}

const ChatContext = createContext<IChatContext>({
	messages: [],
	addMessage: () => { },
	sendMessage: async () => { },
	setBot: () => { },
});
export type Message = { sender: string, message: string, timestamp: number }

export function ChatHistoryProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {

	const [messages, setMessages] = useState<Message[]>([]);
	const [currentBot, setCurrentBot] = useState<Bot | null>(null);

	useEffect(() => {
		if (currentBot) {
			const botHistory = currentBot.getHistory().filter(h => h.role !== "system").map(h => ({
				sender: h.role === 'user' ? 'user' : 'ai',
				message: h.content,
			}));
			setMessages(botHistory);
		} else {
			setMessages([])
		}
	}, [currentBot]);

	const addMessage = (msg: UIMessage) => setMessages(prev => [...prev, msg]);

	const setBot = (bot: Bot) => setCurrentBot(bot);

	function userMessageUpdate(userInput: string) {
		setMessages(messages => [...messages, { sender: "user", message: userInput, timestamp: Date.now() }])
	}

	const sendMessage = async (text: string) => {
		if (!currentBot) {
			console.error("No bot configured – call setBot first.");
			return;
		}

		const userMsg: UIMessage = {
			sender: "user",
			message: text,
		};
		addMessage(userMsg);

		const reply = await currentBot.sendMessage(text);

		if (reply) {
			const aiMsg: UIMessage = {
				sender: "ai",
				message: reply,
			};
			addMessage(aiMsg);
		}
	};
	return (<ChatContext.Provider value={{ messages, addMessage, sendMessage, setBot }}>{children}</ChatContext.Provider>)
}

export function useChatHistory() {
	return useContext(ChatContext)
}
