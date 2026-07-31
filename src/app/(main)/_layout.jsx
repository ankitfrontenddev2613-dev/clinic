import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const MainRoot = () => {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="home" />
      <Stack.Screen name="doctor" />
    </Stack>
  )
}

export default MainRoot

const styles = StyleSheet.create({})