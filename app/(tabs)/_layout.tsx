import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const TabIcon = ({ focused, title }: { focused: boolean; title: string }) => (
  <View className='flex-1 mt-3 flex flex-col items-center'>
    {/* <Image
      source={icon}
      tintColor={focused ? "#0061ff" : "#666876"}
      resizeMode='contain'
      className='size-6'
    /> */}
    <Text
      className={`${focused ? "text-green-600" : "text-green-200"} text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopWidth: 1,
          minHeight: 50,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title='Home'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='collection'
        options={{
          headerShown: false,
          title: "Collection",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title='Collection'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='add'
        options={{
          headerShown: false,
          title: "Add",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title='Add'
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              title='Profile'
            />
          ),
        }}
      />
    </Tabs>
  );
}
