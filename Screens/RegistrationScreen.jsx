import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PhotoBG from "../assets/PhotoBG.jpg";
import add from "../assets/add.png";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {

  const [state, setState] = useState(initialState);

  const onRegister = () => {
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={PhotoBG}
          imageStyle={styles.bgimage}
        ></ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.containerForm}>
            <View style={styles.regForm}>
              <View style={styles.regFormPhoto}>
                <Image source={add} style={styles.regAddPhoto}></Image>
              </View>
              <Text style={styles.regTitle}>Реєстрація</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputLogin}
                  placeholder="Логін"
                  value={state.userName}
                  onChangeText={(text) =>
                    setState({ ...state, userName: text.trim() })
                  }
                ></TextInput>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  value={state.email}
                  onChangeText={(text) =>
                    setState({ ...state, email: text.trim() })
                  }
                ></TextInput>
                <View style={styles.passContainer}>
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Пароль"
                    textContentType="password"
                    secureTextEntry={true}
                    value={state.password}
                    onChangeText={(text) =>
                      setState({ ...state, password: text.trim() })
                    }
                  ></TextInput>
                  <TouchableOpacity style={styles.showPassContainer}>
                    <Text style={styles.showPassText}>Показати</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Pressable onPress={onRegister} style={styles.signUpBtn}>
                <Text style={styles.btnText}>Зареєстуватися</Text>
              </Pressable>
              <View>
                <TouchableOpacity>
                  <Text style={styles.accountText}>Вже є акаунт? Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },

  bgimage: {
    position: "absolute",
    top: 0,
    left: 0,
    // transform: [{ translateX: -196 }],
    flex: 1,
    justifyContent: "center",
    width: 395,
    height: 830,
    resizeMode: "cover",
  },

  containerForm: {
    position: "relative",
  },

  regForm: {
    flex: 1,
    position: "absolute",
    transform: [{ translateY: -140 }],
    // transform: [{ translateX: -196 }, { translateY: -140 }],
    width: 393,
    height: 566,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    paddingRight: 16,
    paddingBottom: 78,
    paddingLeft: 16,
  },

  regFormPhoto: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [{ translateX: 136 }, { translateY: -60 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  regAddPhoto: {
    position: "absolute",
    bottom: 15,
    right: -12,
    width: 25,
    height: 25,
  },

  regTitle: {
    fontFamily: "Roboto500",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 32,
  },

  inputContainer: {
    marginBottom: 44,
  },

  inputLogin: {
    width: 343,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },

  inputEmail: {
    width: 343,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },

  passContainer: {
    position: "relative",
  },

  inputPass: {
    width: 344,
    height: 50,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 0,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },

  showPassContainer: {
    position: "absolute",
    top: 16,
    right: 40,
  },

  showPassText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  signUpBtn: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },

  btnText: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
  },

  accountText: {
    textAlign: "center",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
