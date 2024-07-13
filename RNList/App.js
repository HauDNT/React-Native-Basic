import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar, FlatList, SectionList } from 'react-native';
import groupedPokemonList from "./grouped-data.json";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={groupedPokemonList}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text style={styles.cardText}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.type}</Text>
                )}
                ItemSeparatorComponent={() => <View style={{height: 16}}/>}
                SectionSeparatorComponent={() => <View style={{height: 16}}/>}
            />
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
    sectionHeader: {
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
