import { Tabs } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#d74a3aff',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: { fontSize: 8 },
                tabBarStyle: {
                    backgroundColor: 'black',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Início',
                    // tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: 'Contato',
                    // tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5
                            name="house-user"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    // tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="contacts"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    // tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="person-circle"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
