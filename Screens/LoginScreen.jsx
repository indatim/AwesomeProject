import React, { useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import PhotoBG from "../assets/PhotoBG.jpg";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [state, setState] = useState(initialState);

  const onLogin = () => {
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
            <View style={styles.loginForm}>
              <Text style={styles.loginTitle}>Увійти</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputEmail}
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  onChangeText={(text) =>
                    setState({ ...state, email: text.trim() })
                  }
                  value={state.email}
                ></TextInput>
                <View style={styles.passContainer}>
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Пароль"
                    textContentType="password"
                    onChangeText={(text) =>
                      setState({ ...state, password: text.trim() })
                    }
                    value={state.password}
                  ></TextInput>
                  <TouchableOpacity style={styles.showPassContainer}>
                    <Text style={styles.showPassText}>Показати</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Pressable onPress={onLogin} style={styles.logInBtn}>
                <Text style={styles.btnText}>Увійти</Text>
              </Pressable>
              <View style={styles.textLogInContainer}>
                <Text style={styles.regText}>Немає аккаунту? </Text>
                <TouchableOpacity>
                  <Text style={styles.regTextLink}>Зареєструватися</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
  },

  textLogInContainer: {},

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

  loginForm: {
    flex: 1,
    position: "absolute",
    transform: [{ translateY: -60 }],
    // transform: [{ translateX: -196 }, { translateY: -60 }],
    width: 395,
    height: 506,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingTop: 32,
    paddingRight: 16,
    paddingBottom: 144,
    paddingLeft: 16,
  },

  loginTitle: {
    fontFamily: "Roboto500",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 32,
  },

  inputContainer: {
    marginBottom: 44,
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

  logInBtn: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 343,
    height: 51,
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

  textLogInContainer: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  regText: {
    textAlign: "center",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  regTextLink: {
    padding: 0,
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});

export default LoginScreen;
