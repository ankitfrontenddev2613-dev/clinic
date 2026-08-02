import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
const ClinicAvatar = () => {
  return (
    <View style={styles.iconBox}>
      <View style={styles.icons}>
        <FontAwesome name="building-o" size={30} color={'rgb(92 107 98 )'} />
      </View>
    </View>
  )
}

export default ClinicAvatar

const styles = StyleSheet.create({
  iconBox: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  icons: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})