import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export function InputField() {
    const [chatContent, setChatContent] = useState('');

    return (
        <View style={style.InputContainer}>
            <TextInput style={style.inputfield} value={chatContent} onChangeText={setChatContent} placeholder="Type to chat.."></TextInput>

            {/* änra till att skicka till API sen*/}
            <Button style={style.sendButton} title="icon?" onPress={() => console.log(chatContent + "skicka till API sen")}></Button>
        </View>
    )
}

{/** Lite fulstyling till att börja med, fixa 100% bredd etc, fick det inte att funka */ }

const style = StyleSheet.create({
    InputContainer: {
        flexDirection: "row",
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        elevation: 3,
    },

    sendButton: {
        backgroundColor: "green",
    }
})