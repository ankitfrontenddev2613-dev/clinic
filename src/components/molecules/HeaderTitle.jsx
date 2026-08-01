import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const HeaderTitle = ({ SubTitle, Title, subTitleStyle, titleStyle }) => {
  return (
    <View style={styles.titleCard}>
      <Text style={[styles.subTitle, subTitleStyle]}>{SubTitle}</Text>
      <Text style={[styles.title, titleStyle]}>{Title}</Text>
    </View>
  )
}

export default HeaderTitle

const styles = StyleSheet.create({
  titleCard: {
    flexDirection: 'column',
    gap: 5
  },
  subTitle: {
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: "Sora_100Thin",
    fontSize: moderateScale(12),
    color: '#000'
  },
  title: {
    fontSize: moderateScale(25),
    fontFamily: "Sora_400Regular",
  },

})