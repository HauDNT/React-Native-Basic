import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { createNavigationContainerRef } from '@react-navigation/native';
import AppNavigator from "./AppNavigator";

const AppContainer = createNavigationContainerRef(AppNavigator);

export default function App() {
    return (
        <AppContainerAppContainer/>
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
