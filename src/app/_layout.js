import {
  finishLoading,
  login,
} from "@/redux/slices/authSlice";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

import {
  Sora_100Thin,
  Sora_200ExtraLight,
  Sora_300Light,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  Sora_700Bold,
  Sora_800ExtraBold,
} from "@expo-google-fonts/sora";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Stack,
  router,
} from "expo-router";

import * as SplashScreen from "expo-splash-screen";

import { useEffect, useRef } from "react";

import {
  Animated,
  StyleSheet,
} from "react-native";

import {
  Provider,
  useDispatch,
  useSelector,
} from "react-redux";

import { store } from "../redux/store";


SplashScreen.preventAutoHideAsync();


function AuthCheck() {

  const dispatch = useDispatch();

  const {
    isLoggedIn,
    isLoading,
  } = useSelector(
    (state) => state.auth
  );


  // --------------------------------
  // CHECK ASYNC STORAGE USER
  // --------------------------------

  useEffect(() => {

    const checkUser = async () => {

      try {

        const storedUser =
          await AsyncStorage.getItem("user");

        console.log(
          "STORED USER:",
          storedUser
        );

        if (storedUser) {

          const user =
            JSON.parse(storedUser);

          dispatch(login(user));

        } else {

          dispatch(finishLoading());

        }

      } catch (error) {

        console.log(
          "AUTH CHECK ERROR:",
          error
        );

        dispatch(finishLoading());
      }
    };

    checkUser();

  }, [dispatch]);


  // --------------------------------
  // REDIRECT
  // --------------------------------

  useEffect(() => {

    if (isLoading) {
      return;
    }

    if (isLoggedIn) {

      console.log(
        "USER LOGGED IN → HOME"
      );

      router.replace(
        "/(main)/home"
      );

    } else {

      console.log(
        "USER NOT LOGGED IN → LOGIN"
      );

      router.replace(
        "/(auth)/login"
      );

    }

  }, [
    isLoading,
    isLoggedIn,
  ]);


  return null;
}


const RootLayout = () => {

  const [
    fontsLoaded,
    fontError,
  ] = useFonts({

    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,

    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,

  });


  const fadeAnim =
    useRef(
      new Animated.Value(1)
    ).current;


  // --------------------------------
  // SPLASH
  // --------------------------------

  useEffect(() => {

    if (
      fontsLoaded ||
      fontError
    ) {

      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }
      ).start(() => {

        SplashScreen.hideAsync();

      });

    }

  }, [
    fontsLoaded,
    fontError,
    fadeAnim,
  ]);


  // --------------------------------
  // FONT LOADING
  // --------------------------------

  if (
    !fontsLoaded &&
    !fontError
  ) {

    return (
      <Animated.View
        style={[
          styles.splashContainer,
          {
            opacity: fadeAnim,
          },
        ]}
      />
    );

  }


  return (

    <Provider store={store}>

      <AuthCheck />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

    </Provider>

  );
};


export default RootLayout;


const styles = StyleSheet.create({

  splashContainer: {

    flex: 1,

    backgroundColor: "#fff",

    justifyContent: "center",

    alignItems: "center",

  },

});