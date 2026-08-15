import { Feather, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFB020',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
        tabBarIconStyle: styles.tabIcon,
        tabBarLabelStyle: styles.tabLabel,
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
  tabBar: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 30,
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: '#12312B',
    borderRadius: 50,
    borderTopWidth: 0,
    paddingVertical: 7,
    height: 70,
    itemAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  tabItem: {
    flex: 1,
  },

  tabIcon: {
    marginBottom: 2,
    marginTop: 15,
  },

  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },

  icon: {
    width: 34,
    height: 30,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },

  activeIcon: {
    width: 38,
    height: 32,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,

    backgroundColor: '#E8F3EC',
  },
})

