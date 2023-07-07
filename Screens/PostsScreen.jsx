import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const PostsScreen = () => {

  const navigation = useNavigation();

  const onLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <Pressable onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../assets/avatar-mini.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userMail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    flexDirection: "row",
    height: 88,
    paddingTop: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: " #E5E5E5",
  },

  title: {
    fontFamily: "Roboto500",
    fontSize: 17,
    marginLeft: 148,
    marginRight: 90,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginLeft: 16,
  },

  avatar: {
    marginRight: 8,
  },

  userName: {
    fontFamily: "Roboto700",
    fontSize: 13,
    lineHeight: 15.23,
  },

  userMail: {
    fontFamily: "Roboto400",
    fontSize: 11,
    lineHeight: 12.89,
  },
});

export default PostsScreen;