import { Feather, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      screenContentStyle={styles.screenContent}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-large" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(doctor)"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="stethoscope" size={size} color={color} />

          ),
        }}
      />
      <Tabs.Screen
        name="(queue)"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="ticket" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

const styles = StyleSheet.create({

})

