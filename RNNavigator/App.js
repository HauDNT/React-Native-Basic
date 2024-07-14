import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CoursesScreen from "./screens/CoursesScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "purple",
            }}>
                <Tab.Screen 
                    name="Courses list" 
                    component={CoursesScreen}
                    options={{
                        tabBarLabel: "Course list",
                        tabBarIcon: ({color}) => <Ionicons name="list" size={30} color={color} />,
                        tabBarBadge: 0,
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                        tabBarLabel: "My profile",
                        tabBarIcon: ({color}) => <Ionicons name="person" size={30} color={color} />,
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({color}) => <Ionicons name="settings" size={30} color={color} />,
                        tabBarBadge: 0,
                    }}
                />
                <Tab.Screen name="About Stack" component={AboutStack} options={{
                    headerShown: false
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

