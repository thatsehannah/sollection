import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className='h-screen bg-primary-300'>
      <Text className='text-2xl text-primary-foreground'>Home</Text>
    </SafeAreaView>
  );
}
