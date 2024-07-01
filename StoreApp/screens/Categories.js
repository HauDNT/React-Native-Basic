import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryListItem from "../components/CategoryListItem";

export default function Categories() {
    const data = [
        {
            id: 1,
            name: 'Category 1',
        },
        {
            id: 2,
            name: 'Category 2',
        },
        {
            id: 3,
            name: 'Category 3',
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={
                    ({item}) => <CategoryListItem category={item}/>
                }
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
