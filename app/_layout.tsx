import { Drawer } from "expo-router/drawer";
import { Home, Info, Mail } from "lucide-react-native";

import "../global.css";

export default function RootLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name="index"
                options={{
                    drawerLabel: "Home",
                    title: "Home",
                    drawerIcon: ({ color, size }: { color: string; size: number }) => (
                        <Home size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="about"
                options={{
                    drawerLabel: "About",
                    title: "About",
                    drawerIcon: ({ color, size }: { color: string; size: number }) => (
                        <Info size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="contact"
                options={{
                    drawerLabel: "Contact",
                    title: "Contact",
                    drawerIcon: ({ color, size }: { color: string; size: number }) => (
                        <Mail size={size} color={color} />
                    ),
                }}
            />
        </Drawer>
    );
}
