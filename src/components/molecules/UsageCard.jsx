import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const UsageCard = ({ title, rating, maxrating }) => {
  return (
    <View style={styles.usageCard}>
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{rating} of {maxrating} used</Text>
      </View>
      <Text style={styles.rating}>{rating}/{maxrating}</Text>
    </View>
  )
}

export default UsageCard

const styles = StyleSheet.create({
  usageCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: moderateScale(20),
    borderRadius: 15
  }, title: {
    fontSize: 20,
    fontFamily: 'Montserrat_500Medium'
  }, subTitle: {
    fontSize: 13,
    fontFamily: 'Sora_500Medium'
  }, rating: {
    fontSize: 15,
    fontFamily: 'Sora_500Medium'
  }
})