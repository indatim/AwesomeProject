import { useNavigation } from "@react-navigation/native";
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
import Toast from "react-native-toast-message";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const navigation = useNavigation();

  const onLogin = () => {
    if (!state.email || !state.password) {
      Toast.show({
        type: "error",
        text1: "Всі поля мають бути заповнені!",
      });
      return;
    }

    if (!state.email.includes("@")) {
      Toast.show({
        type: "error",
        text1: "Введіть дійсну електронну пошту!",
      });
      return;
    }

    if (state.password.length < 5) {
      Toast.show({
        type: "error",
        text1: "Пароль має бути не менше 5 символів!",
      });
      return;
    }

    // console.log(state);
    navigation.navigate("Home");
    setState(initialState);
  };

  const handleShowPass = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bgimage.jpg")}
          style={styles.backgroundImage}
        >
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingContainer}
            behavior="height"
          >
            <View style={styles.loginFormContainer}>
              <Text style={styles.loginTitle}>Увійти</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={
                    emailFocus ? styles.inputEmailFocus : styles.inputEmail
                  }
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  onChangeText={(text) =>
                    setState({
                      ...state,
                      email: text.trim(),
                    })
                  }
                  value={state.email}
                ></TextInput>
                <View style={styles.passContainer}>
                  <TextInput
                    style={passFocus ? styles.inputPassFocus : styles.inputPass}
                    onFocus={() => setPassFocus(true)}
                    onBlur={() => setPassFocus(false)}
                    placeholder="Пароль"
                    textContentType="password"
                    secureTextEntry={!isShowPassword}
                    minLength={5}
                    maxLength={20}
                    value={state.password}
                    onChangeText={(text) =>
                      setState({
                        ...state,
                        password: text.trim(),
                      })
                    }
                  ></TextInput>
                  <TouchableOpacity style={styles.showPassContainer}>
                    <Text style={styles.showPassText} onPress={handleShowPass}>
                      {""}
                      {!isShowPassword ? "Показати" : "Сховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.btnFormContainer}>
            <Pressable onPress={onLogin} style={styles.logInBtn}>
              <Text style={styles.btnText}>Увійти</Text>
            </Pressable>
            <View style={styles.textLogInContainer}>
              <Text style={styles.regText}>Немає аккаунту? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
                <Text style={styles.regTextLink}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  keyboardAvoidingContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  loginFormContainer: {
    position: "relative",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 32,
    paddingBottom: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 1,
    // borderColor: "#212121",
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

  inputEmailFocus: {
    width: 343,
    height: 50,
    color: "#212121",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },

  inputPassFocus: {
    width: 344,
    height: 50,
    color: "#212121",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    marginBottom: 0,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderColor: "#FF6C00",
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
    right: 16,
  },

  showPassText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  btnFormContainer: {
    // position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingBottom: 144,
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
