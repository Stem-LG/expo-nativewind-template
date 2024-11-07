import { Text, View } from "react-native";

export default function ContactPage() {
    return (
        <View className="flex-1 justify-center items-center bg-yellow-500">
            <Text className="text-black text-2xl">Contact Us</Text>
            <Text className="text-black mt-4">Feel free to reach out to us at contact@example.com.</Text>
        </View>
    );
}