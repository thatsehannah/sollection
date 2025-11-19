import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className='h-screen bg-primary-300'>
      <Text className='text-2xl text-primary-foreground'>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
