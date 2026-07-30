import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const MainRoot = () => {

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="doctor" />
    </Stack>
  )
}

export default MainRoot

const styles = StyleSheet.create({})