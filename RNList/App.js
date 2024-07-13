import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList } from 'react-native';
import pokemonList from "./data.json";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>
                <FlatList
                    data={pokemonList}
                    renderItem={({item}) => (
                        <View style={styles.card} key={item.id}>
                            <Text style={styles.cardText}>{item.name}</Text>
                            <Text style={styles.cardText}>{item.type}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={<View style={{height: 16}}/>}
                    ListEmptyComponent={<Text>No item found</Text>}
                    ListHeaderComponent={<Text style={styles.headerList}>Pokemon List</Text>}
                    ListFooterComponent={<Text style={styles.footerList}>End of Pokemon List</Text>}
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
    scrollView: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
    },
    cardText: {
        fontSize: 30,
    },
    headerList: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 12,
        fontWeight: "bold",
    },
    footerList: {
        fontSize: 24,
        textAlign: "center",
        marginVertical: 12,
        fontWeight: "bold",
    }
});
