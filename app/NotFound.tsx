import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundPage() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View className="flex-1 justify-center items-center bg-red-500">
                <Text className="text-white text-2xl">This screen doesn't exist.</Text>
                <Link href="/">
                    <Text className="text-white mt-4">Go to home screen!</Text>
                </Link>
            </View>
        </>
    );
}
