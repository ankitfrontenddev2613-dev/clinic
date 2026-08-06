import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const MainRoot = () => {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}

export default MainRoot

const styles = StyleSheet.create({})