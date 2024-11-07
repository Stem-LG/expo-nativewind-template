import { Text, View } from "react-native";

export default function IndexPage() {
    return (
        <View className="flex-1 justify-center items-center bg-gray-200">
            <Text className="text-black text-2xl">Welcome to the Index Page</Text>
            <Text className="text-black mt-4">This is the main entry point of your application.</Text>
        </View>
    );
}
