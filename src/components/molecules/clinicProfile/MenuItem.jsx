import { AntDesign } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text } from 'react-native'

const MenuItem = ({ title, iconColor, iconSize, onPress, titleStyle }) => {
  return (
    <Pressable onPress={onPress} style={styles.menuBox}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <AntDesign name="right" size={iconSize} color={iconColor} />
    </Pressable>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    color: '#12312b',
    fontFamily: "Sora_500Medium",

  }, menuBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 15
  }
})