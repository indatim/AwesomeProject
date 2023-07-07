import React from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Feather } from "@expo/vector-icons";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
          paddingRight: 81,
          paddingLeft: 81,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          let iconComponent;

          if (route.name === "Posts") {
            iconComponent = (
              <Ionicons name="grid-outline" size={size} color="#212121" />
            );
          } else if (route.name === "Create Posts") {
            iconComponent = (
              <View style={styles.addBtn}>
                <Ionicons name="add-outline" size={size} color="#FFFFFF" />
              </View>
            );
          } else if (route.name === "Profile") {
            iconComponent = <Feather name="user" size={size} color="#212121" />;
          }

          return iconComponent;
        },
      })}
    >
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen
        name="Create Posts"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  addBtn: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default Home;
