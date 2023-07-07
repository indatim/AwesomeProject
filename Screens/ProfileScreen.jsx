import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export const ProfileScreen = () => {

  const navigation = useNavigation();

  onLogout = () => {
    navigation.navigate("Login");
  };

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bgimage.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.contentContainer}>
            <View style={styles.avatarContainer}>
              <ImageBackground
                source={require("../assets/avatar.png")}
                style={styles.avatarImage}
              ></ImageBackground>
            </View>
            <Pressable style={styles.closeBtn}>
              <Image source={require("../assets/close.png")} />
            </Pressable>
            <Pressable style={styles.logOutBtn} onPress={onLogout}>
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </Pressable>
            <Text style={styles.title}>Natali Romanova</Text>
            <ScrollView>
              <View style={styles.photoContainer}>
                <ImageBackground
                  source={require("../assets/RectanglePrifileImg-1.jpg")}
                  style={styles.postPhoto}
                ></ImageBackground>
              </View>
              <Text style={styles.photoTitle}>Ліс</Text>
              <View style={styles.infoContainer}>
                <View style={styles.commentsIcon}>
                  <Image source={require("../assets/message-circle.png")} />
                  <Text style={styles.commentsQuantity}>8</Text>
                </View>
                <View style={styles.likesIcon}>
                  <Image source={require("../assets/thumbs-up.png")} />
                  <Text style={styles.likesQuantity}>153</Text>
                </View>
                <View style={styles.locationPhoto}>
                  <SimpleLineIcons
                    name="location-pin"
                    size={15}
                    color="#BDBDBD"
                  />
                  <Text style={styles.location}>Ukraine</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  title: {
    fontFamily: "Roboto400",
    fontSize: 30,
    marginBottom: 32,
  },

  contentContainer: {
    position: "relative",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 43,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 147,
  },

  avatarContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    overflow: "hidden",
  },

  closeBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 114,
    top: 15,
  },

  logOutBtn: {
    position: "absolute",
    width: 25,
    height: 25,
    right: 16,
    top: 22,
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  photoContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
    overflow: "hidden",
  },

  postPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  photoTitle: {
    marginRight: "auto",
    marginTop: 8,
    fontFamily: "Roboto500",
    fontSize: 16,
  },

  infoContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 32,
  },

  commentsIcon: {
    flexDirection: "row",
    marginRight: 24,
    alignItems: "center",
  },

  commentsQuantity: {
    marginLeft: 6,
    color: "#212121",
    fontFamily: "Roboto400",
    fontSize: 16,
  },

  likesIcon: {
    flexDirection: "row",
    marginRight: "auto",
    alignItems: "center",
  },

  likesQuantity: {
    marginLeft: 6,
    color: "#212121",
    fontFamily: "Roboto400",
    fontSize: 16,
  },

  locationPhoto: {
    flexDirection: "row",
    alignItems: "center",
  },

  location: {
    marginLeft: 4,
    textDecorationLine: "underline",
    color: "#212121",
    fontFamily: "Roboto400",
    fontSize: 16,
  },
});

export default ProfileScreen;