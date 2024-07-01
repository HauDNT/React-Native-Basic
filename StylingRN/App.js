import { View, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.darkMode}>
                <Text style={styles.darkModeText}>Style Inheritance</Text>
            </View>
            <View style={[styles.box, styles.lightbluebg, styles.boxShadow]}>
                <Text>Light blue box</Text>
            </View>
            <View style={[styles.box, styles.lightgreenbg, styles.boxShadow]}>
                <Text>Light green box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightyellow",
        padding: 60,
        alignItems: "center",
    },
    darkMode: {
        backgroundColor: "#000",
    },
    darkModeText: {
        color: "white",
    },  
    box: {
        width: 200,
        height: 200,
        padding: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
    },
    lightbluebg: {
        backgroundColor: 'lightblue',
    },
    lightgreenbg: {
        backgroundColor: 'lightgreen',
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 20,      // Apply this attribute to display box shadow in Android
    },  
});



