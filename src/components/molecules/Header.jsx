import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const Header = () => {
  return (
    <View style={styles.titleCard}>
      <Text style={styles.subTitle}>Header25</Text>
      <Text style={styles.title}>Header</Text>
      <Text style={styles.title}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  titleCard: {
    flexDirection: 'column'
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: "Sora_400Regular"
  },
  subTitle: {
    fontSize: moderateScale(12)
  }
})