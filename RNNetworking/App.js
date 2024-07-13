import { SafeAreaView, StatusBar, StyleSheet, View, FlatList, Text } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
    const [posts, setPost] = useState([]);

    const fetchData = async (limit = 10) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        );

        const data = await response.json();
        setPost(data);
    };

    useEffect(() => {
        fetchData(10);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    data={posts}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.bodyText}>{item.body}</Text>
                        </View>
                    )}
                    ListEmptyComponent={<Text>No posts found!</Text>}
                    ListHeaderComponent={<Text style={styles.headerList}>Posts List</Text>}
                    ListFooterComponent={<Text style={styles.footerList}>End of list</Text>}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },  
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
    titleText: {
        fontSize: 30,
    },
    bodyText: {
        fontSize: 24,
        color: "#666666"
    },
    headerList: {
        fontSize: 40,
        textAlign: "center",
        marginBottom: 16,
    },
    footerList: {
        fontSize: 24,
        fontStyle: "italic",
        textAlign: "center",
        marginVertical: 16,
    },
    separator: {
        marginVertical: 10,
    }
});