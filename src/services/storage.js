import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async () => {
  await AsyncStorage.setItem('user', JSON.stringify(user))
}

export const getUser = async () => {
  await AsyncStorage.getItem('user');
  return user ? JSON.parse(user) : null
}

export const removeUser = async () => {
  await AsyncStorage.removeItem('user')
}