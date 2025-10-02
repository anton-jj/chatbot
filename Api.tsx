import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: getApiKey() });

function getApiKey(): string {
  const API_KEY: string = process.env.EXPO_PUBLIC_API_KEY;
  console.log(API_KEY);
  if (!API_KEY) {
    throw new Error(
      "Missing api key - set EXPO_PUBLIC_API_KEY to a valid api key",
    );
  }

  return API_KEY;
}

export interface botConfig {
  id: string;
  name: string;
  system_instruction: string;
}

export interface message {
  role: "user" | "model" | "system";
  content: string;
}

export interface bot {
  id: string;
  name: string;
  sendMessage: (message: string) => Promise<string | undefined>;
  getHistory: () => message[];
}

export function createChatBot(config: botConfig): bot {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction: config.system_instruction,
    },
  });
  const history: message[] = [
    { role: "system", content: config.system_instruction },
  ];

  return {
    id: config.id,
    name: config.name,

    async sendMessage(message: string) {
      try {
        history.push({ role: "user", content: message });

        const res = await chat.sendMessage({ message: message });
        const replay = res.text;

        history.push({ role: "model", content: replay });
        return replay;
      } catch (err) {
        console.error("error while sendMessage", err);
      }
    },

    getHistory() {
      return [...history];
    },
  };
}
