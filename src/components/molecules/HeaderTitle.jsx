import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const HeaderTitle = ({ SubTitle, Title, subTitleStyle, titleStyle }) => {
  return (
    <View style={styles.titleCard}>
      <Text style={[styles.subtitle, { subTitleStyle }]}>{SubTitle}</Text>
      <Text style={[styles.title, { titleStyle }]}>{Title}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
  titleCard: {
    flexDirection: 'column',
    gap: 5
  }, subTitle: {
    letterSpacing: moderateScale(5),
    textTransform: 'uppercase',
    fontFamily: "Sora_300Light",
    fontSize: moderateScale(12),
  },
  title: {
    fontSize: moderateScale(25),
    fontFamily: "Sora_400Regular",
  },

})