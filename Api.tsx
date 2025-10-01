import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: getApiKey() })

function getApiKey(): string {
	const API_KEY: string = process.env.EXPO_PUBLIC_API_KEY
	console.log(API_KEY)
	if (!API_KEY) {
		throw new Error("failed to find a api key, set it in shell or in .env")
	}

	return API_KEY
}

export async function askAi(prompt: string) {
	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents: prompt
	})
	console.log(response.text)
	return response.text
}
