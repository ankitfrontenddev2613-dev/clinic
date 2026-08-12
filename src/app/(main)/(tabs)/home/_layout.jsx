import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'

const HomeRoot = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='notifications' />
    </Stack>
  )
}

export default HomeRoot

const styles = StyleSheet.create({})