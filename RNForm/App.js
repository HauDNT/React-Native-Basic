import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput } from 'react-native';
import { useState } from 'react';


export default function App() {
    const [name, setName] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.inputText}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name..."
                // autoCorrect={false}
                // autoCapitalize="words"
                // secureTextEntry
                // keyboardType="ascii-capable"
            />
            <TextInput 
                style={styles.multiText}
                placeholder="Descript..."
                multiline={true}
            />
            <Text style={styles.text}>My name is {name}</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    inputText: {
        height: 40,
        width: "100%",
        margin: 12,
        padding: 12,
        borderWidth: 1
    },
    text: {
        fontSize: 30,
        padding: 12,
    },
    multiText: {
        minHeight: 100,
        width: "100%",
        margin: 12,
        padding: 12,
        borderWidth: 1
    }
});
