import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CircleIconButton = ({ onPress, plusStyle }) => {
  const router = useRouter()

  return (
    <Pressable onPress={onPress} style={[styles.plusIcon, plusStyle]}>
      <AntDesign name="plus" size={25} color={'#000'} />
    </Pressable>
  )
}

export default CircleIconButton

const styles = StyleSheet.create({
  plusIcon: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: 'rgb(255 176 32 )',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%'
  }
})