import { StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import LinearBackgroundColor from '../atoms/LinearBackgroundColor'

const SubscriptionCard = () => {
  return (
    <LinearBackgroundColor>
      <View style={styles.columText}>
        <Text style={styles.text}>Current Plan</Text>
        <Text style={styles.tokenText}>Pro</Text>
        <Text style={styles.activeText}>Active · renews in 24 days</Text>
      </View>
    </LinearBackgroundColor>
  )
}

export default SubscriptionCard

const styles = StyleSheet.create({
  columText: {
    alignItems: 'start',
    minHeight: 160,
    justifyContent: 'center',
    gap: 10,
    padding: 20
  },
  text: {
    color: '#ffb020',
    fontFamily: 'Sora_400Regular',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 2
  },
  tokenText: {
    fontSize: moderateScale(40),
    lineHeight: moderateScale(45),
    fontFamily: 'Montserrat_500Medium',
    letterSpacing: 3,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }, activeText: {
    fontSize: moderateScale(18),
    color: '#fff9'
  }
})