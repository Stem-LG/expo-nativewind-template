import { Text, View } from "react-native";

export default function AboutPage() {
    return (
        <View className="flex-1 justify-center items-center bg-green-500">
            <Text className="text-white text-2xl">About Us</Text>
            <Text className="text-white mt-4">This is the about page of our starter template.</Text>
        </View>
    );
}
