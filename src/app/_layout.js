import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import {
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Sora_100Thin, Sora_400Regular, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold,Sora_500Medium } from "@expo-google-fonts/sora";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";


const RootLayout = () => {
  const [isLogin, setIsLogin] = useState(true); // Replace with your actual login state logic
  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Sora_100Thin,
    Sora_400Regular,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
    Sora_500Medium
  });
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity 1
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      // Run fade-out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600, // Animation duration in ms
        useNativeDriver: true,
      }).start(() => {
        // Hide splash screen after animation is complete
        SplashScreen.hideAsync();
      });
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    // Show animated splash screen view until fonts load
    return (
      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
        {/* Your splash screen content (image/logo) can be placed here */}
      </Animated.View>
    );
  }
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
}

export default RootLayout

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#fff", // Set background color to match splash
    justifyContent: "center",
    alignItems: "center",
  },
})