import React, { createContext, useContext, useEffect, useState } from "react"

interface IChatContext{messages : Message[]; userMessageUpdate : (userInput : string) => void}

const ChatContext = createContext<IChatContext>({messages : [], userMessageUpdate: (userInput : string) => {}})
export type Message = {sender: string, message: string, timestamp: number}

export function ChatHistoryProvider({children} : {children : React.ReactNode|React.ReactNode[] }) {

    const [messages, setMessages ] = useState<Message[]>([{sender: "user", message: "user placeholder message", 
        timestamp: Date.now()}, {sender: "ai", message: "ai response placeholder message", timestamp: Date.now()}])

    function userMessageUpdate(userInput : string) {
        setMessages(messages => [...messages, {sender : "user", message : userInput, timestamp: Date.now()}])
    }

    return ( <ChatContext.Provider value={{messages, userMessageUpdate}}>{children}</ChatContext.Provider>)
}

export function useChatHistory() {
    return useContext(ChatContext)
 }