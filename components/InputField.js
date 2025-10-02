import { Cat } from "lucide-react-native";
import { useState } from "react";
import { Button, Dimensions, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ChatHistoryProvider, useChatHistory } from "../hooks/useChatHistory";

    const {width} = Dimensions.get("window")

export function InputField() {
    const [chatContent, setChatContent] = useState('');
    const { userMessageUpdate } = useChatHistory();

    return (
        <View style={style.InputContainer}>
            <TextInput multiline style={style.inputfield} value={chatContent} onChangeText={setChatContent} placeholder="Type to chat.."></TextInput>

            {/* änra till att skicka till API sen*/}
            <TouchableOpacity style={style.sendButton} onPress={() => userMessageUpdate(chatContent)}>
                <Cat size={25} color={"pink"}/>
            </TouchableOpacity>
        </View>
    )
}

{/** Lite fulstyling till att börja med, fixa 100% bredd etc, fick det inte att funka */ }

const style = StyleSheet.create({
    InputContainer: {
        flexDirection: "row",
        backgroundColor: "#C68A9E",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        elevation: 5,
        width: width,
        maxHeight: 120,
        minHeight: "fit-content",
        bottom: 0,
        borderRadius: 24,
    },

    inputfield: {
        width: width - 60,
        fontSize: 20,
        paddingLeft: 20,
    },

    sendButton: {
        backgroundColor: "#553671",
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        borderRadius: 24,
    }
})