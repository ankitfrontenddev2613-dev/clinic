import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const AuthRoot = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen name="index" />
      <Stack.Screen name="terms_agree" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="choose-plan" />
      <Stack.Screen name="login" />
      <Stack.Screen name="verification_email" />
      <Stack.Screen name="forgotpassword" />
      <Stack.Screen name="verify_otp" />
    </Stack>
  )
}

export default AuthRoot

const styles = StyleSheet.create({})