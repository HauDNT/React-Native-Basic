import { SafeAreaView, StatusBar, StyleSheet, View, FlatList, Text, ActivityIndicator, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [isPosting, setIsPosting] = useState(false);

    const fetchData = async (limit = 1) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        );

        const data = await response.json();
        
        setPosts(data);
        setIsLoading(false);
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData(1);
        setRefreshing(false);
    };

    const addPost = async () => {
        setIsPosting(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: postTitle,
                body: postBody
            })
        });

        const newPost = await response.json();
        setPosts([newPost, ...posts]);
        setPostTitle("");
        setPostBody("");
        setIsPosting(false);
    };

    useEffect(() => {
        fetchData(10);
    }, []);

    if (isLoading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="lightblue" />
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Post title" 
                        value={postTitle}
                        onChangeText={setPostTitle}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Post body" 
                        value={postBody}
                        onChangeText={setPostBody}
                    />
                    <Button 
                        title={isPosting ? "Adding..." : "Add Post"}
                        onPress={addPost}
                        disabled={isPosting}
                    />
                </View>
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
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                </View>
            </>
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
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        margin: 16,
    },
    input: {
        height: 40,
        borderColor: "blue",
        borderWidth: 1,
        marginBottom: 8,
        padding: 8,
        borderRadius: 8,
    },
});