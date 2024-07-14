import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

export default function PostsScreen({ route }) {
    const navigation = useNavigation();
    const {name} = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: name
        });
    }, [navigation, name]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Posts Screen</Text>
            <Text style={styles.text}>{name}</Text>
            <Button title="Update name" onPress={() => navigation.setParams({ name: "New name!!!" })} />
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
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