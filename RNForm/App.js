import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch } from 'react-native';
import { useState } from 'react';


export default function App() {
    const [name, setName] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.inputText}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name..."
            />
            <TextInput 
                style={styles.multiText}
                placeholder="Descript..."
                multiline={true}
            />
            <Text style={styles.text}>My name is {name}</Text>

            <View
                style={styles.switchContainer}
            >
                <Text style={styles.text}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={() => setIsDarkMode((prevState) => !prevState)}
                    trackColor={{false: "#767577", true: "lightblue"}}
                    thumbColor="f4f3f4"
                />
            </View>

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
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    }
});
