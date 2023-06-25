import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import User from "../assets/User.png";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.userPhoto} source={User} />
        <View>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
  },

  userContainer: {
    flexDirection: "row",
    height: 60,
    gap: 8,
    alignItems: "center",
    marginBottom: 32,
  },

  userPhoto: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  userName: {
    fontFamily: "Roboto700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  
  userEmail: {
    fontFamily: "Roboto400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
});

export default PostsScreen;