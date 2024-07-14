import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PostsScreen from "./screens/PostsScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerStyle: {
                backgroundColor: "#6A51AE"
            },
            headerTintColor: "#FFF",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerRight: () => (
                <Pressable onPress={() => alert("Menu button pressed!")}>
                    <Text style={{color: "#FFF", fontSize: 16}}>Menu</Text>
                </Pressable>
            ),
            contentStyle: {
                backgroundColor: "#E8E4F3"
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: "Welcome Home",
            }}/>
            <Stack.Screen 
                name="Posts" 
                component={PostsScreen} 
                initialParams={{
                    name: "Guest",
                }}
                options={({route}) => ({
                    title: route.params.name,
                })}
                />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <AboutStack />
        </NavigationContainer>
    );
}
