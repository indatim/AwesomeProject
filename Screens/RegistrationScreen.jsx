import { useNavigation } from "@react-navigation/native";
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
import Toast, { SuccessToast, ErrorToast } from "react-native-toast-message";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const navigation = useNavigation();

  const onRegister = () => {
    if (!state.email || !state.password || !state.userName) {
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
            <View style={styles.regFormContainer}>
              <View style={styles.regFormPhoto}>
                <Pressable style={styles.regAddPhoto}>
                  <Image source={require("../assets/add.png")}></Image>
                </Pressable>
              </View>
              <Text style={styles.regTitle}>Реєстрація</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={
                    loginFocus ? styles.inputLoginFocus : styles.inputLogin
                  }
                  placeholder="Логін"
                  value={state.userName}
                  onFocus={() => setLoginFocus(true)}
                  onBlur={() => setLoginFocus(false)}
                  onChangeText={(text) =>
                    setState({ ...state, userName: text.trim() })
                  }
                ></TextInput>
                <TextInput
                  // style={styles.inputEmail}
                  style={
                    emailFocus ? styles.inputEmailFocus : styles.inputEmail
                  }
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  placeholder="Адреса електронної пошти"
                  keyboardType="email-address"
                  value={state.email}
                  onChangeText={(text) =>
                    setState({ ...state, email: text.trim() })
                  }
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
                      setState({ ...state, password: text.trim() })
                    }
                  ></TextInput>
                  <TouchableOpacity
                    style={styles.showPassContainer}
                    onPress={handleShowPass}
                  >
                    <Text style={styles.showPassText}>
                      {""}
                      {!isShowPassword ? "Показати" : "Сховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>

          <View style={styles.btnFormContainer}>
            <Pressable onPress={onRegister} style={styles.signUpBtn}>
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </Pressable>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.accountText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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

  regFormContainer: {
    position: "relative",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 92,
    paddingBottom: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderWidth: 1,
    // borderColor: "#212121",
  },

  regFormPhoto: {
    position: "absolute",
    top: -60,
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
    marginBottom: 33,
  },

  inputContainer: {
    marginBottom: 43,
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

  inputLoginFocus: {
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

  passContainer: {
    position: "relative",
    justifyContent: "space-between",
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
    textAlign: "right",
  },

  btnFormContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingBottom: 78,
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
