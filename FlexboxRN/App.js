import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: "#FFD3B6"}}>Box 1</Box>
            <Box style={{ backgroundColor: "#F9E2AF"}}>Box 2</Box>
            <Box style={{ backgroundColor: "#96C9F4"}}>Box 3</Box>
            <Box style={{ backgroundColor: "#FFC7ED"}}>Box 4</Box>
            <Box style={{ backgroundColor: "#FF6969"}}>Box 5</Box>
            <Box style={{ backgroundColor: "#06D001", flexGrow: 1}}>Box 6</Box>
            <Box style={{ backgroundColor: "#667BC6"}}>Box 7</Box>
            <Box style={{ backgroundColor: "#F4A261"}}>Box 8</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 5,
        borderColor: "red",
    },
});
