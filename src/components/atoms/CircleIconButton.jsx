import { AntDesign } from '@expo/vector-icons'
import { Pressable, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const CircleIconButton = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.plusIcon}>
      <AntDesign name="plus" size={25} color={'#000'} />
    </Pressable>
  )
}

export default CircleIconButton

const styles = StyleSheet.create({
  plusIcon: {
    position: 'absolute',
    width: moderateScale(50),
    height: moderateScale(50),
    right: moderateScale(20),
    top: '80svh',
    backgroundColor: 'rgb(255 176 32 )',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%'
  }
})