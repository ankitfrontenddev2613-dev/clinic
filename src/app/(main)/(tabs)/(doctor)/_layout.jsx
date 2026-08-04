import { Stack } from "expo-router";

export default function DoctorLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="registration" />
      <Stack.Screen name="edit" />
      <Stack.Screen name="working-hours" />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}