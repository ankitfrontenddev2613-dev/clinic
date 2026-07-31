import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const BackButton = () => {
  const router = useRouter()
  return (
    <Pressable onPress={() => router.back()} style={styles.arrowBtn}>
      <Feather name="arrow-left" size={28} color="black" />
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
  arrowBtn: {
    backgroundColor: '#fff',
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(50),
    marginBottom: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
})