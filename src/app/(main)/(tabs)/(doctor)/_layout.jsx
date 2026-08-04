import { Stack } from "expo-router";

export default function DoctorLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="registration" />
      <Stack.Screen name="edit" />
      <Stack.Screen name="[id]" />
      <Stack.Screen name="working-hours" />
    </Stack>
  );
}