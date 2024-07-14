import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({route}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title="Go to Posts" onPress={() => navigation.navigate("Posts", {name: "Houston"})}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
});